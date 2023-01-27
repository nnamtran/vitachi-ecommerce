import Nav from "../components/Nav";
import CategoryBar from "../components/CategoryBar";
import Branding from "../components/Branding";
import ProductSlider from "../components/ProductSlider";
import "../styles/productsAll.css";
import { useEffect, useState } from "react";
//import Messenger from "../components/Messenger";

const BabyCare = ({data}) => {
    const [babyProducts, setbabyProduct] = useState()

    useEffect(()=> {
        console.log(data)
        setbabyProduct(data)
    }, [data])

    if (babyProducts === undefined) {
        return
    } else {
        return (
            <div className="overlay">
                <Nav />
                <CategoryBar />
                <Branding />
                <h1 className="all-heading baby-heading">All baby care products</h1>
                <div className="all-products-container">
                    {
                        babyProducts.map((item) => (
                            <ProductSlider key={item._id} name={item.product_name} price={item.price} image={item.image.data.buffer} class={'card-in-all'}/>
                        ))
                    }
                </div>
            </div>
            
        )
    }
}
export default BabyCare