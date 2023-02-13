import logo from "../images/logo.png";
import { useState, useEffect } from "react";

const Nav = (props) => {
    const [open, setOpen] = useState(false);
    const [cartItems, setCartItems] = useState();
    const [removeItem, setRemoveItem] = useState();
    //const [total, setTotal] = useState(0);
    const viewCart = () => {
        setOpen(true);
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        setCartItems(cartItems) 
        // let sum = 0;
        // cartItems.forEach(item => sum += parseInt(item.price) * item.quantity);
        // console.log(sum)
        // setTotal(sum)
    }

    const closeCart = () => {
        setOpen(false)
    }

    const handleRemoveItem = () => {
        console.log(removeItem);
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        let temp = cartItems.filter(item => item.name !== removeItem);
        // let newTotal = 0
        // temp.forEach(item => newTotal += parseInt(item.price) * item.quantity);
        // setTotal(newTotal)
        setCartItems(temp)
        localStorage.setItem('cart', JSON.stringify(temp));
    }

    useEffect(() => {
        if (removeItem !== undefined) {
            handleRemoveItem();
            props.handleCartLength();
        } else {
            console.log('nothing to remove')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [removeItem])

    return (
        <nav>
            <div className="logo-container">
                <img className="logo-image" src={logo} alt="Landing Page"/>
                <div className="logo-description">
                    <div>Tiêu chuẩn sống Úc</div> 
                    <div>dành cho người Việt</div>
                </div>
            </div>
            <div className="nav-info">
                <div className="info-upper">
                    <div className="store-detail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                        <a className="store-detail-button" href="www.google.com">STORE DETAILS</a>
                    </div>
                    <div className="login">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189"/></svg>
                        <a className="login-button" href="www.google.com">LOGIN/REGISTER</a>
                    </div>
                    <div className="cart">
                        <div className="cart-logo">
                            <div className="cart-number">{props.cart}</div>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z"/></svg>
                        </div>
                        <div className="view-cart-button" onClick={() => viewCart()}>VIEW CART</div>
                        {open ? (
                            <div className="display-cart-container">
                                <div className="display-cart">
                                    <div className="cart-heading">
                                        <div className="close-button" onClick={() => closeCart()}>
                                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width='30' height='30' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
                                            <h2>Close</h2>
                                        </div>
                                        <div className="your-cart">
                                            <h1>Your Cart</h1>
                                            <a href="/checkout" className="checkout">Checkout</a>
                                        </div>
                                    </div>
                                    <div className="cart-item-list">
                                    {cartItems === undefined ? (
                                        <div></div>
                                    // eslint-disable-next-line
                                    ) : (props.itemWithQuantity.map((item) => {
                                        if (item.quantity !== 0) {
                                            return (
                                            <div key={item.name} className="cart-items">
                                                <div className="item-column3">
                                                    <img 
                                                        className="cart-image"
                                                        src={item.image}
                                                        alt="product"
                                                    />
                                                    </div>
                                                <div className="item-column1">
                                                    <h3>{item.name}</h3>
                                                    <h4>Số lượng:</h4>
                                                    <div className="cart-item-quantity">
                                                        <div onClick={() => props.handleDecrementQuantity(item.name)}><svg clipRule="evenodd" width='15px' stroke="#ffffff" fill="#ffffff" height='15px' fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 11.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z" fillRule="nonzero"/></svg></div>
                                                        {props.itemWithQuantity ? (
                                                            // eslint-disable-next-line 
                                                            props.itemWithQuantity.map(el => {
                                                                if (el.name === item.name && el.quantity !== 0) {
                                                                    return (    
                                                                        <div 
                                                                        key={item.name}unselectable="on" className="quantity">{el.quantity}
                                                                        </div>
                                                                    )
                                                                } else if (el.name === props.name && el.quantity === 1){
                                                                    return null
                                                                }
                                                            })
                                                        ) : (
                                                            <div></div>
                                                        )}
                                                        <div onClick={() => props.handleIncrementQuantity(item.name)}><svg clipRule="evenodd" fillRule="evenodd" width='15px' stroke="#ffffff" fill="#ffffff" height='15px' strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero"/></svg></div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="item-column2">
                                                    <div onClick={() => {
                                                        setRemoveItem(item.name);
                                                        props.handleRemoveItemFromCart(item.name);
                                                    }}><svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width='20' height='20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg></div>
                                                    <h3>{(parseInt(item.price) * item.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}vnđ</h3>
                                                </div>
                                            </div>
                                            )
                                        }
                                        
                                    }))     
                                    }
                                    </div>
                                    <div className="total">
                                        <div>
                                            <h4>Your total:</h4>
                                            <h3>{props.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} vnđ</h3>
                                        </div>
                                        <div>
                                        <a href="/checkout" className="checkout">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        ) : (<div></div>)}
                    </div>
                </div>
                <div className="info-searchbar">
                    <input className="search-box" placeholder="Search products or brands"/>
                    <svg width="24" height="24" stroke="#ffffff" fill="#ffffff"clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fillRule="nonzero"/></svg>
                </div>
            </div>
          
        </nav>
    )
}

export default Nav