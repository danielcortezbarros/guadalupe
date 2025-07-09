import { useTranslation } from "react-i18next";

import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'

const Products = () => {
    const { t, i18n } = useTranslation();
    
    return(
        <div className="products-container">
            <div className="products-list">
                <ul>
                    <li>{t("products-page.service1")}</li>
                    <li>{t("products-page.service2")}</li>
                    <li>{t("products-page.service3")}</li>
                    <li>{t("products-page.service4")}</li>
                </ul>
            </div>
            <div className="products-boxes-container">
                <div className="product-box">
                    <img src={product1}/>
                </div>
                <div className="product-box">
                    <img src={product2}/>
                </div>
                <div className="product-box">
                    <img src={product3}/>
                </div>
            </div>
       

        </div>
    )
}
export default Products;