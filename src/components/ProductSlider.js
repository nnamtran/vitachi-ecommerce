import React from "react";
import "../styles/products.css";
// {props.class ? 'card card-in-all' : 'card card-in-landingpage'}
import { useState, useEffect } from "react";
const ProductSlider = (props) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        let existing = props.itemWithQuantity.find(el => el.name === props.name)
        if (existing) {
            setOpen(true)
        }
    // eslint-disable-next-line
    }, [])
    return (
        <div className={props.class ? 'card card-in-all' : 'card card-in-landingpage'}>
            <img 
                className="product--image"
                src={props.image}
                alt="products"
            />
            <p className="product-name">{props.name}</p>
            <p className="price">{props.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</p>

            {open ? (
                <div className="change-quantity-container">
                    <div onClick={() => props.handleDecrementQuantity(props.name)}><svg clipRule="evenodd" width='20px' stroke="#ffffff" fill="#ffffff" height='20px' fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 11.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z" fillRule="nonzero"/></svg></div>
                    
                    {props.itemWithQuantity ? (
                        // eslint-disable-next-line 
                        props.itemWithQuantity.map(el => {
                            if (el.name === props.name && el.quantity !== 0) {
                                return (
                                    <div unselectable="on" className="quantity" key={el.name}>{el.quantity}</div>
                                )
                            } else if (el.name === props.name && el.quantity === 0){
                                setOpen(!open)
                            }
                        })
                    ) : (
                        <div></div>
                    )}
                    
                    <div onClick={() => props.handleIncrementQuantity(props.name)}><svg clipRule="evenodd" fillRule="evenodd" width='20px' stroke="#ffffff" fill="#ffffff" height='20px' strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero"/></svg></div>
                </div>
            ) : (
                <div onClick={() => {
                    setOpen(!open)
                    props.addCart(props.name, props.price, props.image)
                }} className='add-cart'>Buy now</div>  
            )}
               
        </div>
    )
}

export default ProductSlider;