import './header.scss';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <>
      <p className="header__logo">ex-api</p>
      {props.currencies.map((currency) => {
        return currency !== props.baseCurrency ? (
          <div className="header__group" key={currency}>
            <p>{currency}</p>
            <p>{props.rates[currency]}</p>
          </div>
        ) : null;
      })}
    </>
  );
}
Header.propTypes = {
  rates: PropTypes.object.isRequired,
  currencies: PropTypes.array.isRequired,
  baseCurrency: PropTypes.string,
};
export default Header;
