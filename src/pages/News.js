import { useTranslation } from "react-i18next";


const News = () => {
    const { t, i18n } = useTranslation();
    
    return(
        <div className="news-container">
            <h2>Novidades da Guadalupe</h2>
            <div className="news-boxes-container">
                <div className="news-box">
                    <div className="news-image-box">
                        <img className="news-image" src="/assets/gallery1.jpg"/>
                    </div>
                    <h3>These news are fantastic</h3>
                    <p className="std-text">Let me tell you about the best news you have heard all week, we made a new appearance in a TV show and it was fantastic. off the charts.</p>
                </div>
                <div className="news-box">
                    <div className="news-image-box">
                        <img className="news-image" src="/assets/gallery2.jpg"/>
                    </div>
                    <h3>These news are fantastic</h3>
                    <p className="std-text">Let me tell you about the best news you have heard all week, we made a new appearance in a TV show and it was fantastic. off the charts.</p>
                </div>
                <div className="news-box">
                    <div className="news-image-box">
                        <img className="news-image" src="/assets/gallery3.jpg"/>
                    </div>
                    <h3>These news are fantastic</h3>
                    <p className="std-text">Let me tell you about the best news you have heard all week, we made a new appearance in a TV show and it was fantastic. off the charts.</p>
                </div>
            </div>
        </div>
    )
};
export default News;