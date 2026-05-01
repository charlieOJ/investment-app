import investHeader from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={investHeader} alt="Stylish money bag" />
      <h1>Investment App</h1>
    </header>
  );
};

export default Header;
