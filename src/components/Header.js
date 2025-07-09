import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from '../assets/logo_white.png'
import header_img from '../assets/header.jpg'

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <header className="header">
      {/* Top image section with logo */}
      <div className="header-top" style={{ backgroundImage: `url(${header_img})` }}>
        <Link to="/" className="logo-link">
          <img src={logo} alt="Guadalupe Logo" className="logo" />
        </Link>
      </div>
      <div className="nav-container">
        {/* Language nav */}
        <nav>
          <ul className="nav-language">
            <li><button onClick={() => changeLanguage("pt")}>PT</button></li>
            <li><button onClick={() => changeLanguage("en")}>EN</button></li>
            <li><button onClick={() => changeLanguage("de")}>DE</button></li>
            <li><button onClick={() => changeLanguage("fr")}>FR</button></li>
          </ul>
        </nav>

        {/* Main nav */}
        <nav>
          <ul className="nav">
            <li><Link to="/sobre-nos">{t("nav.about")}</Link></li>
            <li><Link to="/produtos">{t("nav.products")}</Link></li>
            <li><Link to="/esg">{t("nav.esg")}</Link></li>
            <li><Link to="/noticias">{t("nav.news")}</Link></li>
            <li><Link to="/contactos">{t("nav.contact")}</Link></li>
          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Header;