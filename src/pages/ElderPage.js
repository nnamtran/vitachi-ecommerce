import Nav from "../components/Nav";
import CategoryBar from "../components/CategoryBar";
import Branding from "../components/Branding";
import ProductSlider from "../components/ProductSlider";
import "../styles/productsAll.css";
import { useEffect, useState } from "react";
//import Messenger from "../components/Messenger";

const ElderPage = ({data}) => {
    const [elderProducts, setElderProduct] = useState()


    useEffect(()=> {
        //setVitaminsProduct(props.data);
        console.log(data)
        setElderProduct(data)
    }, [data])

    if (elderProducts === undefined) {
        return
    } else {
        return (
            <div className="overlay">
                <Nav />
                <CategoryBar />
                <Branding />
                <h1 className="all-heading elderly-heading">All elder products</h1>
                <div className="all-products-container">
                    {
                        elderProducts.map((item) => (
                            <ProductSlider key={item._id} name={item.product_name} price={item.price} image={item.image.data.buffer} class={'card-in-all'}/>
                        ))
                    }
                </div>
            </div>
            
        )
    }

}
export default ElderPage