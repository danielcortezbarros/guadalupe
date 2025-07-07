import { Link } from "react-router-dom";

import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <header className="header">
      <nav>
        <ul className="nav-language">
          <li><button onClick={() => changeLanguage('pt')}>PT</button></li>
          <li><button onClick={() => changeLanguage('en')}>EN</button></li>
          <li><button onClick={() => changeLanguage('de')}>DE</button></li>
          <li><button onClick={() => changeLanguage('fr')}>FR</button></li>
        </ul>
      </nav>
      <nav>
        <ul className="nav">
          <li><Link to="/sobre-nos">{t('about')}</Link></li>
          <li><Link to="/produtos">{t('products')}</Link></li>
          <li><Link to="/esg">{t('esg')}</Link></li>
          <li><Link to="/noticias">{t('news')}</Link></li>
          <li><Link to="/contactos">{t('contact')}</Link></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;