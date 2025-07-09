import { useTranslation } from "react-i18next";
import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'

const News = () => {
    const { t, i18n } = useTranslation();
    
    return(
        <div className="news-container">
            <h2>Novidades da Guadalupe</h2>
            <div className="news-boxes-container">
                <div className="news-box">
                    <div className="news-image-box">
                        <img className="news-image" src={gallery1}/>
                    </div>
                    <h3>These news are fantastic</h3>
                    <p className="std-text">Let me tell you about the best news you have heard all week, we made a new appearance in a TV show and it was fantastic. off the charts.</p>
                </div>
                <div className="news-box">
                    <div className="news-image-box">
                        <img className="news-image" src={gallery2}/>
                    </div>
                    <h3>These news are fantastic</h3>
                    <p className="std-text">Let me tell you about the best news you have heard all week, we made a new appearance in a TV show and it was fantastic. off the charts.</p>
                </div>
                <div className="news-box">
                    <div className="news-image-box">
                        <img className="news-image" src={gallery3}/>
                    </div>
                    <h3>These news are fantastic</h3>
                    <p className="std-text">Let me tell you about the best news you have heard all week, we made a new appearance in a TV show and it was fantastic. off the charts.</p>
                </div>
            </div>
        </div>
    )
};
export default News;