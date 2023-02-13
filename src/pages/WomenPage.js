import Nav from "../components/Nav";
import CategoryBar from "../components/CategoryBar";
import Branding from "../components/Branding";
import ProductSlider from "../components/ProductSlider";
import "../styles/productsAll.css";
import { useEffect, useState } from "react";
import beautyHeading from '../images/beautyheading.jpeg'
//import Messenger from "../components/Messenger";

const WomenPage = (props) => {
    const [womenProducts, setWomenProduct] = useState()


    useEffect(()=> {
        //setVitaminsProduct(props.data);
        //console.log(data)
        setWomenProduct(props.data)
    }, [props.data])

    if (womenProducts === undefined) {
        return
    } else {
        return (
            <div className="overlay">
                <Nav 
                    cart={props.cart} 
                    handleCartLength={props.handleCartLength} 
                    handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                    handleIncrementQuantity={props.handleIncrementQuantity} 
                    handleDecrementQuantity={props.handleDecrementQuantity} 
                    itemWithQuantity={props.itemWithQuantity}
                    total={props.total}/>
                <CategoryBar />
                <Branding />
                <div className="babycare-video-container">
                    <div className="cover-div">
                        <h1 className="all-heading beauty-heading">Women's health & beauty</h1>
                    </div>
                    {/* <iframe src="https://www.youtube.com/embed/PKMMDkCy5Ws?modestbranding=1&autoplay=1&loop=1&start=25&end=30&mute=1&showinfo=0&controls=0&playlist=PKMMDkCy5Ws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    <img src={beautyHeading} alt='baby heading'/>
                    
                </div>
                <div className="all-products-container">
                    {
                        womenProducts.map((item) => (
                            <ProductSlider 
                                key={item._id} 
                                name={item.product_name} 
                                price={item.price} 
                                image={item.imageUrl}
                                class={'card-in-all'}
                                addCart={props.addCart} 
                                handleDecrementQuantity={props.handleDecrementQuantity}
                                handleIncrementQuantity={props.handleIncrementQuantity}
                                itemWithQuantity={props.itemWithQuantity}/>
                        ))
                    }
                </div>
            </div>
            
        )
    }

}
export default WomenPage