import { useTranslation } from "react-i18next";


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
                    <img src= "/assets/product1.jpg"/>
                </div>
                <div className="product-box">
                    <img src= '/assets/product2.jpg'/>
                </div>
                <div className="product-box">
                    <img src= '/assets/product3.jpg'/>
                </div>
            </div>
       

        </div>
    )
}
export default Products;