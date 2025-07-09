import iapmei from '../assets/iapmei.jpg'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-bar">

      </div>
      <div className="footer-info-container">
        <div className="footer-text-container">
          <p>
            <span className="footer-company"><strong>CONFECÇÕES GUADALUPE, S.A.</strong></span><br/>
            Rua Carlos Magalhães, 19 <br/>
            4700-001 Braga – Portugal <br/>
            (+351) 252 607 430<br/>
            geral@guadalupe.pt
          </p>
        </div>
        <div className="footer-image-container">
          <img src="./assets/iapmei.jpg" className="footer-logo"/>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
