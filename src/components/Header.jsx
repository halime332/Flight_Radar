import { Link } from "react-router-dom";


const Header = () => {
  return (
  <header>
    <Link to="/">
      <img src="planelogo.png" alt="plane-logo" />
      <h2>Uçuş Radarı</h2>
    </Link>

    <h3>275 Uçuş Bulundu </h3>
  </header>
    
  );
};

export default Header;