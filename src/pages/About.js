import { useTranslation } from "react-i18next";

const About = () => {
    const { t, i18n } = useTranslation();
    
    return(<div className="about-container">
        <h2>EXCELÊNCIA NO VESTUÁRIO DE TRABALHO</h2>
        <p className="std-text">
            A Confecções Guadalupe tem um compromisso sólido com a qualidade, um ADN de inovação e um legado de quase meio século na confeção de vestuário de trabalho e proteção. A história da empresa demonstra que é possível crescer e consolidar-se no mercado global sem perder a identidade e o foco na excelência.
        </p>
    </div>)
}
export default About;