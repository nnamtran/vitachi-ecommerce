import Nav from "../components/Nav";
import CategoryBar from "../components/CategoryBar";
import Branding from "../components/Branding";
import ProductSlider from "../components/ProductSlider";
import "../styles/productsAll.css";
import { useEffect, useState } from "react";
//import Messenger from "../components/Messenger";
import pregnantHeading from '../images/pregnancyheading.jpeg'
const PregnancyPage = (props) => {
    const [pregnancyProducts, setPregnancyProduct] = useState()

    // const vitamins = vitaminsProducts.map((item) => (
    //     <ProductSlider key={item._id} name={item.product_name} price={item.price} image={item.image.data.buffer}/>
    // ))

    useEffect(()=> {
        //setVitaminsProduct(props.data);
        //console.log(data)
        setPregnancyProduct(props.data)
    }, [props.data])

    if (pregnancyProducts === undefined) {
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
                    total={props.total}
                />
                <CategoryBar />
                <Branding />
                <div className="babycare-video-container">
                    <div className="cover-div">
                        <h1 className="all-heading pregnancy-heading">All pregnancy care</h1>
                    </div>
                    {/* <iframe src="https://www.youtube.com/embed/PKMMDkCy5Ws?modestbranding=1&autoplay=1&loop=1&start=25&end=30&mute=1&showinfo=0&controls=0&playlist=PKMMDkCy5Ws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    <img src={pregnantHeading} alt='pregnancy heading'/>
                </div>
                <div className="all-products-container">
                    {
                        pregnancyProducts.map((item) => (
                            <ProductSlider 
                                key={item._id} 
                                name={item.product_name} 
                                price={item.price} 
                                image={item.imageUrl}
                                class={'card-in-all'}
                                addCart={props.addCart} 
                                handleDecrementQuantity={props.handleDecrementQuantity}
                                handleIncrementQuantity={props.handleIncrementQuantity}
                                itemWithQuantity={props.itemWithQuantity}
                            />
                        ))
                    }
                </div>
            </div>
            
        )
    }

}
export default PregnancyPage