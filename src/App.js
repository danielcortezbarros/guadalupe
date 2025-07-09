import './i18n';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/guadalupe" element={<Home />} />
          <Route path="/guadalupe/sobre-nos" element={<About />} />
          <Route path="/guadalupe/produtos" element={<Products />} />
          <Route path="/guadalupe/esg" element={<ESG />} />
          <Route path="/guadalupe/noticias" element={<News />} />
          <Route path="/guadalupe/contactos" element={<Contacts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;