import './i18n';
import './App.css';

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ESG from './pages/ESG';
import News from './pages/News';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<About />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/esg" element={<ESG />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/contactos" element={<Contacts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;