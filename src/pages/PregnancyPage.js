import Nav from "../components/Nav";
import CategoryBar from "../components/CategoryBar";
import Branding from "../components/Branding";
import ProductSlider from "../components/ProductSlider";
import "../styles/productsAll.css";
import { useEffect, useState } from "react";
//import Messenger from "../components/Messenger";

const PregnancyPage = ({data}) => {
    const [pregnancyProducts, setPregnancyProduct] = useState()

    // const vitamins = vitaminsProducts.map((item) => (
    //     <ProductSlider key={item._id} name={item.product_name} price={item.price} image={item.image.data.buffer}/>
    // ))

    useEffect(()=> {
        //setVitaminsProduct(props.data);
        console.log(data)
        setPregnancyProduct(data)
    }, [data])

    if (pregnancyProducts === undefined) {
        return
    } else {
        return (
            <div className="overlay">
                <Nav />
                <CategoryBar />
                <Branding />
                <h1 className="all-heading pregnancy-heading">All pregnancy products</h1>
                <div className="all-products-container">
                    {
                        pregnancyProducts.map((item) => (
                            <ProductSlider key={item._id} name={item.product_name} price={item.price} image={item.image.data.buffer} class={'card-in-all'}/>
                        ))
                    }
                </div>
            </div>
            
        )
    }

}
export default PregnancyPage