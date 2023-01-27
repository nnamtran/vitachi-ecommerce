import Nav from "../components/Nav";
import CategoryBar from "../components/CategoryBar";
import Branding from "../components/Branding";
import ProductSlider from "../components/ProductSlider";
import "../styles/productsAll.css";
import { useEffect, useState } from "react";
//import Messenger from "../components/Messenger";

const MenPage = ({data}) => {
    const [menProducts, setMenProduct] = useState()


    useEffect(()=> {
        //setVitaminsProduct(props.data);
        console.log(data)
        setMenProduct(data)
    }, [data])

    if (menProducts === undefined) {
        return
    } else {
        return (
            <div className="overlay">
                <Nav />
                <CategoryBar />
                <Branding />
                <h1 className="all-heading men-heading">All men products</h1>
                <div className="all-products-container">
                    {
                        menProducts.map((item) => (
                            <ProductSlider key={item._id} name={item.product_name} price={item.price} image={item.image.data.buffer} class={'card-in-all'}/>
                        ))
                    }
                </div>
            </div>
            
        )
    }

}
export default MenPage