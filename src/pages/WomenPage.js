import Nav from "../components/Nav";
import CategoryBar from "../components/CategoryBar";
import Branding from "../components/Branding";
import ProductSlider from "../components/ProductSlider";
import "../styles/productsAll.css";
import { useEffect, useState } from "react";
//import Messenger from "../components/Messenger";

const WomenPage = ({data}) => {
    const [womenProducts, setWomenProduct] = useState()


    useEffect(()=> {
        //setVitaminsProduct(props.data);
        console.log(data)
        setWomenProduct(data)
    }, [data])

    if (womenProducts === undefined) {
        return
    } else {
        return (
            <div className="overlay">
                <Nav />
                <CategoryBar />
                <Branding />
                <h1 className="all-heading women-heading">All women & beauty products</h1>
                <div className="all-products-container">
                    {
                        womenProducts.map((item) => (
                            <ProductSlider key={item._id} name={item.product_name} price={item.price} image={item.image.data.buffer} class={'card-in-all'}/>
                        ))
                    }
                </div>
            </div>
            
        )
    }

}
export default WomenPage