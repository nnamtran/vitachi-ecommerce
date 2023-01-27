import "../styles/products.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import ProductSlider from './ProductSlider';

// brands

//vitamins
import centrum from "../images/brands/centrum.png";
import elevit from "../images/brands/elevit.png";
import naturesOwn from "../images/brands/naturesOwn.png";
import swisse from "../images/brands/swisse.png";
import blackmores from "../images/brands/blackmore.png";
import wagner from "../images/brands/wagner.png";

//baby
import healthycare from "../images/brands/healthycare.png";
import ostelin from "../images/brands/ostelin.png";
import prospan from "../images/brands/prospan.webp";
import pendiasure from "../images/brands/pendiasure.png";
import combantrin from "../images/brands/combantrin.jpeg";
import naturesway from "../images/brands/naturesway.png";

//pregnancy
import bioisland from "../images/brands/bioisland.png";
import biooil from "../images/brands/biooil.png";

//women
import loreal from "../images/brands/loreal.jpeg";
import redwin from "../images/brands/redwin.png";
import lucaspaw from "../images/brands/lucaspaw.png";

//elderly
import ensure from "../images/brands/ensure.png";
import thompsons from "../images/brands/thompsons.jpeg";
import glucerna from "../images/brands/glucerna.png";

//men
import goodhealth from "../images/brands/goodhealth.webp";
import gohealthy from "../images/brands/gohealthy.jpeg";
import menevit from "../images/brands/menevit.png";

// define responsive website
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1500 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};
//http://localhost:3004/landingpage
//https://vitachi-ecommerce-backend.herokuapp.com/landingpage
const Products = (props) => {
    const [vitamins, setVitamins] = useState([]);
    const [women, setWomen] =useState([]);
    const [elderly, setElderly] = useState([]);
    const [baby, setBaby] = useState([]);
    const [men, setMen] = useState([]);
    const [pregnancy, setPregnancy] = useState([]);
    
    const getLandingPage = async () => {
        try {
            const response = await axios.get('https://vitachi-ecommerce-backend.herokuapp.com/landingpage')

            setVitamins(response.data.vitamins);
            setWomen(response.data.women);
            setElderly(response.data.elderly);
            setBaby(response.data.baby);
            setMen(response.data.men);
            setPregnancy(response.data.pregnancy);

            //console.log(response.data['vitamins'])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLandingPage();
    }, [])

    // useEffect(() => {
    //     console.log(`---- vitamins ----`);
    //     vitamins.forEach((el) => {
    //         console.log(el["product_name"]);
    //     })
    //     console.log(`---- women ----`)
    //     women.forEach((el) => {
    //         console.log(el["product_name"]);
    //     })
    //     console.log(`---- elderly ----`)
    //     elderly.forEach((el) => {
    //         console.log(el["product_name"]);
    //     })
    //     console.log(`---- baby ----`)
    //     baby.forEach((el) => {
    //         console.log(el["product_name"]);
    //     })
    //     console.log(`---- men ----`)
    //     men.forEach((el) => {
    //         console.log(el["product_name"]);
    //     })
    //     console.log(`---- pregnancy ----`)
    //     pregnancy.forEach((el) => {
    //         console.log(el["product_name"]);
    //     })
    // }, [vitamins, women, elderly, baby, men, pregnancy])
    

    

    //Loop through vitamin products array
    const babyProducts = baby.map((item) => (
        <ProductSlider 
            addCart={props.addCart} 
            handleDecrementQuantity={props.handleDecrementQuantity}
            handleIncrementQuantity={props.handleIncrementQuantity}
            itemWithQuantity={props.itemWithQuantity}
            handleOpen={props.handleOpen}
            open={props.open}
            key={item.category} 
            name={item.product_name} 
            price={item.price} 
            image={item.image.data.buffer}/>
    ))

    const vitamin = vitamins.map((item) => (
        <ProductSlider 
            addCart={props.addCart} 
            handleDecrementQuantity={props.handleDecrementQuantity}
            handleIncrementQuantity={props.handleIncrementQuantity}
            itemWithQuantity={props.itemWithQuantity}
            key={item.category} 
            name={item.product_name} 
            price={item.price} 
            image={item.image.data.buffer}/>
    ))

    const pregnancyProducts = pregnancy.map((item) => (
        <ProductSlider 
            addCart={props.addCart} 
            handleDecrementQuantity={props.handleDecrementQuantity}
            handleIncrementQuantity={props.handleIncrementQuantity}
            itemWithQuantity={props.itemWithQuantity}
            key={item.category} 
            name={item.product_name} 
            price={item.price} 
            image={item.image.data.buffer}/>
    ))

    const womenProducts = women.map((item) => (
        <ProductSlider 
            addCart={props.addCart} 
            handleDecrementQuantity={props.handleDecrementQuantity}
            handleIncrementQuantity={props.handleIncrementQuantity}
            itemWithQuantity={props.itemWithQuantity}
            key={item.category} 
            name={item.product_name} 
            price={item.price} 
            image={item.image.data.buffer}/>
    ))

    

    const menProducts = men.map((item) => (
        <ProductSlider 
            addCart={props.addCart} 
            handleDecrementQuantity={props.handleDecrementQuantity}
            handleIncrementQuantity={props.handleIncrementQuantity}
            itemWithQuantity={props.itemWithQuantity}
            key={item.category} 
            name={item.product_name} 
            price={item.price} 
            image={item.image.data.buffer}/>
    ))

    const elderlyProducts = elderly.map((item) => (
        <ProductSlider 
            addCart={props.addCart} 
            handleDecrementQuantity={props.handleDecrementQuantity}
            handleIncrementQuantity={props.handleIncrementQuantity}
            itemWithQuantity={props.itemWithQuantity}
            key={item.category} 
            name={item.product_name} 
            price={item.price} 
            image={item.image.data.buffer}/>
    ))

    return (
        <div className="products-container">
            {/* Baby */}
            <div className="products-section">
                {/* Brands introduction */}
                <div className="headline-brands">
                    <h2 className="heading baby-heading">Shop Baby</h2>
                    <div className="brands">
                        <a href="/naturesway"><img src={naturesway} alt="naturesway"/></a>
                        <a href="/pendiasure"><img src={pendiasure} alt="pendiasure"/></a>
                        <a href="/ostelin"><img src={ostelin} alt="ostelin"/></a>
                        <a href="/healthycare"><img src={healthycare} alt="healthycare"/></a>
                        <a href="/prospan"><img src={prospan} alt="prospan"/></a>
                        <a href="combantrin"><img src={combantrin} alt="combantrin"/></a>
                    </div>
                    <a href="/baby-care" className="show-page-button baby-button">Show all baby products</a>
                </div>

                {/* Showing products */}
                {baby.length !== 0 ? (
                <div>
                    <Carousel responsive={responsive}>
                        {babyProducts}
                    </Carousel>
                </div>
                ) : (<div></div>)}
            </div>

            {/* Pregnancy */}
            <div className="products-section">
                {/* Brands introduction */}
                <div className="headline-brands">
                    <h2 className="heading pregnancy-heading">Shop Pregnancy</h2>
                    <div className="brands">
                        <a href="/elevit"><img src={elevit} alt="elevit"/></a>
                        <a href="/bioisland"><img src={bioisland} alt="bioisland"/></a>
                        <a href="/ostelin"><img src={ostelin} alt="ostelin"/></a>
                        <a href="/biooil"><img src={biooil} alt="biooil"/></a>
                        <a href="/blackmores"><img src={blackmores} alt="blackmores"/></a>
                    </div>
                    <a href="/pregnancy-care" className="show-page-button pregnancy-button">Show all pregnancy products</a>
                </div>

                {/* Showing products */}
                {pregnancy.length !== 0 ? (
                <div>
                    <Carousel responsive={responsive}>
                        {pregnancyProducts}
                    </Carousel>
                </div>
                ) : (<div></div>)}
            </div>
            
            {/* Vitamins */}
            <div className="products-section">
                {/* Brands introduction */}
                <div className="headline-brands">
                    <h2 className="heading vitamins-heading">Shop Family</h2>
                    <div className="brands">
                        <a href="/centrum"><img src={centrum} alt="centrum"/></a>
                        <a href="/elevit"><img src={elevit} alt="elevit"/></a>
                        <a href="/natures-own"><img src={naturesOwn} alt="nature's Own"/></a>
                        <a href="/swisse"><img src={swisse} alt="swisse"/></a>
                        <a href="/blackmores"><img src={blackmores} alt="blackmores"/></a>
                        <a href="wagner"><img src={wagner} alt="wagner"/></a>
                    </div>
                    <a href="/family-care" className="show-page-button vitamins-button">Show all family products</a>
                </div>

                {/* Showing products */}
                {vitamins.length !== 0 ? (
                <div>
                    <Carousel responsive={responsive}>
                        {vitamin}
                    </Carousel>
                </div>
                ) : (<div></div>)}
            </div>

            {/* Women */}
            <div className="products-section">
                {/* Brands introduction */}
                <div className="headline-brands">
                    <h2 className="heading women-heading">Shop Women's Health & Beauty</h2>
                    <div className="brands">
                        <a href="/loreal"><img src={loreal} alt="loreal"/></a>
                        <a href="/redwin"><img src={redwin} alt="redwin"/></a>
                        <a href="lucaspaw"><img src={lucaspaw} alt="lucaspaw"/></a> 
                        <a href="/centrum"><img src={centrum} alt="centrum"/></a>             
                        <a href="/swisse"><img src={swisse} alt="swisse"/></a>
                        <a href="/blackmores"><img src={blackmores} alt="blackmores"/></a>
                        
                    </div>
                    <a href="/women-care" className="show-page-button women-button">Show all women and beauty products</a>
                </div>

                {/* Showing products */}
                {women.length !== 0 ? (
                <div>
                    <Carousel responsive={responsive}>
                        {womenProducts}
                    </Carousel>
                </div>
                ) : (<div></div>)}
            </div>
            
            {/* Elderly */}
            <div className="products-section">
                {/* Brands introduction */}
                <div className="headline-brands">
                    <h2 className="heading elderly-heading">Shop Elderly's Health</h2>
                    <div className="brands">
                        <a href="/ensure"><img src={ensure} alt="ensure"/></a>
                        <a href="/thompsons"><img src={thompsons} alt="thompsons"/></a>
                        <a href="/glucerna"><img src={glucerna} alt="glucerna"/></a>
                        <a href="/centrum"><img src={centrum} alt="centrum"/></a>
                    </div>
                    <a href="/elder-care" className="show-page-button elderly-button">Show all elderly products</a>
                </div>

                {/* Showing products */}
                {elderly.length !== 0 ? (
                <div>
                    <Carousel responsive={responsive}>
                        {elderlyProducts}
                    </Carousel>
                </div>
                ) : (<div></div>)}
            </div>

            {/* Men */}
            <div className="products-section">
                {/* Brands introduction */}
                <div className="headline-brands">
                    <h2 className="heading men-heading">Shop Men's Health</h2>
                    <div className="brands">
                        <a href="/goodhealth"><img src={goodhealth} alt="goodhealth"/></a>
                        <a href="/gohealthy"><img src={gohealthy} alt="gohealthy"/></a>
                        <a href="/menevit"><img src={menevit} alt="menevit"/></a>
                        <a href="/centrum"><img src={centrum} alt="centrum"/></a>                    
                    </div>
                    <a href="/men-care" className="show-page-button men-button">Show all men products</a>
                </div>

                {/* Showing products */}
                {men.length !== 0 ? (
                <div>
                    <Carousel responsive={responsive}>
                        {menProducts}
                    </Carousel>
                </div>
                ) : (<div></div>)}
            </div>
        </div>
    )
}

export default Products