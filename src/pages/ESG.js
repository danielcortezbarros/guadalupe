import { useTranslation } from "react-i18next";


const ESG = () => {
    const { t, i18n } = useTranslation();
    
    return(
        <div className="esg-container">
            <div className="esg-quality">
                <h2>Qualidade</h2>
                <p className="std-text">Com um compromisso claro e em crescendo com a sustentabilidade nas suas diversas vertentes, a Confecções Guadalupe tem vindo a integrar princípios de economia circular e ecodesign nos seus produtos. O enfoque no cliente </p>
                <p className="std-text"><strong>Consultar</strong></p>
                <p className="std-text">Código de ética e conduta</p>
                <p className="std-text">Relatório de Sustentabilidade ESG 2024 da Confecções Guadalupe, S.A.</p>
            </div>
            <div className="esg-awards">
                <h2>Prémios e Distinções</h2>
                <p className="std-text">Ser líder na qualidade e no serviço de excelência </p>
                <div className="esg-awards-logos-container">
                    <div className="award-logo-box">
                        <img src="/assets/PME_Lider_2024.png"/>
                    </div>
                    <div className="award-logo-box">
                        <img src="/assets/PME_Excelencia_2020.png"/>
                    </div>
                </div>
     
            </div>
        </div>
    )
}
export default ESG;