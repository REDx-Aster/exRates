import './currencyInput.scss';
import PropTypes from 'prop-types';

function CurrencyInput(props) {
  return (
    <div className="group">
      <input
        className="number-field__input"
        type="number"
        min={0}
        value={props.amount}
        onChange={(event) => props.onAmountChange(event.target.value)}
      />
      <select
        className="currencies__select"
        value={props.currency}
        onChange={(event) => props.onCurrencyChange(event.target.value)}>
        {props.currencies.map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}
CurrencyInput.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;
