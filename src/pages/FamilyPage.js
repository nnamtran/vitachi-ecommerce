import Nav from "../components/Nav";
import CategoryBar from "../components/CategoryBar";
import Branding from "../components/Branding";
import ProductSlider from "../components/ProductSlider";
import "../styles/productsAll.css";
import { useEffect, useState } from "react";
import vitaminHeading from '../images/vitaminheading.jpeg';
//import Messenger from "../components/Messenger";

const FamilyPage = (props) => {
    const [familyProducts, setFamilyProduct] = useState()

    // const vitamins = vitaminsProducts.map((item) => (
    //     <ProductSlider key={item._id} name={item.product_name} price={item.price} image={item.image.data.buffer}/>
    // ))

    useEffect(()=> {
        //setVitaminsProduct(props.data);
        //console.log(data)
        setFamilyProduct(props.data)
    }, [props.data])

    if (familyProducts === undefined) {
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
                        <h1 className="all-heading vitamin-heading">All vitamin</h1>
                    </div>
                    {/* <iframe src="https://www.youtube.com/embed/PKMMDkCy5Ws?modestbranding=1&autoplay=1&loop=1&start=25&end=30&mute=1&showinfo=0&controls=0&playlist=PKMMDkCy5Ws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    <img src={vitaminHeading} alt='vitamin heading'/>
                    
                </div>
                <div className="all-products-container">
                    {
                        familyProducts.map((item) => (
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
export default FamilyPage