import './App.scss';

import Header from './components/Header';
import CurrencyInput from './components/CurrencyInput';

import { useState, useEffect } from 'react';

import axios from 'axios';

function App() {
  const [amountFirst, setAmountFirst] = useState(0);
  const [amountSecond, setAmountSecond] = useState(0);
  const [currencyFirst, setCurrencyFirst] = useState('UAH');
  const [currencySecond, setCurrencySecond] = useState('USD');
  const [rates, setRates] = useState({});
  const currencies = ['UAH', 'USD', 'EUR'];
  const baseCurrency = 'UAH';

  useEffect(() => {
    axios.get('https://api.exchangerate.host/latest?base=' + baseCurrency).then((response) => {
      setRates(response.data.rates);
    });
  }, []);

  function format(number) {
    return number.toFixed(3);
  }
  function handleAmountFirstChange(amountFirst) {
    setAmountSecond(format((amountFirst * rates[currencySecond]) / rates[currencyFirst]));
    setAmountFirst(amountFirst);
  }
  function handleCurrencyFirstChange(currencyFirst) {
    setAmountSecond(format((amountFirst * rates[currencySecond]) / rates[currencyFirst]));
    setCurrencyFirst(currencyFirst);
  }
  function handleAmountSecondChange(amountSecond) {
    setAmountFirst(format((amountSecond * rates[currencyFirst]) / rates[currencySecond]));
    setAmountSecond(amountSecond);
  }
  function handleCurrencySecondChange(currencySecond) {
    setAmountFirst(format((amountSecond * rates[currencyFirst]) / rates[currencySecond]));
    setCurrencySecond(currencySecond);
  }

  return (
    <div className="wrapper">
      <header className="header">
        <Header rates={rates} currencies={currencies} baseCurrency={baseCurrency} />
      </header>
      <main className="main">
        <CurrencyInput
          onAmountChange={handleAmountFirstChange}
          onCurrencyChange={handleCurrencyFirstChange}
          // currencies={Object.keys(rates)}
          currencies={currencies}
          amount={amountFirst}
          currency={currencyFirst}
        />
        <CurrencyInput
          onAmountChange={handleAmountSecondChange}
          onCurrencyChange={handleCurrencySecondChange}
          // currencies={Object.keys(rates)}
          currencies={currencies}
          amount={amountSecond}
          currency={currencySecond}
        />
      </main>
    </div>
  );
}

export default App;
