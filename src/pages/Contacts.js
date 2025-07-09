import { useTranslation } from "react-i18next";


import ContactForm from "../components/ContactForm";

const Contacts = () => {
    const { t, i18n } = useTranslation();
    
    return (
        <div className="contacts-container">
            <div className="contacts-text-container">
                <p className="std-text">
                    <span className="contacts-company"><strong>CONFECÇÕES GUADALUPE, S.A.</strong></span><br/>
                    Rua Carlos Magalhães, 19 <br/>
                    4700-001 Braga – Portugal <br/>
                    (+351) 252 607 430<br/>
                    geral@guadalupe.pt
                </p>
            </div>
            <div className="contacts-form-container">
                <ContactForm/>
            </div>
        </div>
    )
}
export default Contacts;