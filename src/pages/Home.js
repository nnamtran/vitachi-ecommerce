import Nav from "../components/Nav";
import CategoryBar from "../components/CategoryBar";
import Branding from "../components/Branding";
import Hero from "../components/Hero";
import Products from "../components/Products";
//import Messenger from "../components/Messenger";
import { useState, useEffect } from "react";

const Home = () => {
    const [cart, setCart] = useState(0);
    const [itemWithQuantity, setItemWithQuantity] = useState([]);
    const [total, setTotal] = useState();
    // const [removeItem, setRemoveItem] = useState();
    useEffect(() => {
        if(!localStorage.getItem('cart')) {
            localStorage.setItem('cart', '[]');
        }
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        setCart(cartItems.length);
        setItemWithQuantity(cartItems)
    }, [])

    useEffect(() => {
        console.log(itemWithQuantity);
        let sum = 0;
        itemWithQuantity.forEach(item => sum += parseInt(item.price) * item.quantity);
        setTotal(sum)
    }, [itemWithQuantity])


    const addItemToCart = (name, price, image) => {
        let product = {
            name: name, 
            price: price,
            image,
            quantity: 1
        }
        //console.log(name, price)
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        //console.log(cartItems)
        let findExistingItem = cartItems.find(el => el.name === product.name);
        if (findExistingItem) {
            findExistingItem.quantity += 1;
        } else {
            cartItems.push(product)
        }
        setCart(cartItems.length)


        setItemWithQuantity(prev => {
            let existingIndex = prev.findIndex(el => el.name === name)
            if (existingIndex !== -1) {
                console.log(existingIndex)
                return [...prev.slice(0, existingIndex), Object.assign({}, prev[existingIndex], {quantity: 1}), ...prev.slice(existingIndex+1)]
            } else {
                return [...prev, {name: name, price, image, quantity: 1}]
            }
            
        })

        //console.log(updatedQuantList)
        //setItemWithQuantity(updatedQuantList)
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    const handleCartLength = () => {
        //console.log('remove')
        let cartNewLength = cart - 1;
        setCart(cartNewLength)
    }

    const handleIncrementQuantity = (name) => {
        let updatedQuantList = itemWithQuantity.map(item => {
            if (item.name === name) {
                return {...item, quantity: item.quantity+1}
            }
            return item;
        })
        setItemWithQuantity(updatedQuantList)
        let cartItems = JSON.parse(localStorage.getItem('cart'));


        let findExistingItem = cartItems.find(el => el.name === name);
        if (findExistingItem) {
            findExistingItem.quantity += 1;
        }
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    const handleDecrementQuantity = (name) => {
        let updatedQuantList = itemWithQuantity.map(item => {
            if (item.name === name) {
                return {...item, quantity: item.quantity-1}
            }
            return item;
        })
        setItemWithQuantity(updatedQuantList)
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        let findExistingItem = cartItems.find(el => el.name === name);
        if (findExistingItem) {
            findExistingItem.quantity -= 1;
        }
        let updatedCart = cartItems.filter(item => item.quantity !== 0);
        setCart(updatedCart.length)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }

    const handleRemoveItemFromCart = (name) => {
        let updatedQuantList = itemWithQuantity.map(item => {
            if (item.name === name) {
                return {...item, quantity: 0}
            }
            return item;
        })
        setItemWithQuantity(updatedQuantList);
        // setItemWithQuantity(prev => {
        //     let existingIndex = prev.findIndex(el => el.name === name)
        //     return [...prev.slice(0, existingIndex), Object.assign({}, prev[existingIndex], {quantity: 0}), ...prev.slice(existingIndex+1)]
        // })

        //     return [...prev.slice(0, existingIndex), Object.assign({}, prev[existingIndex], {quantity: 0}), ...prev.slice(existingIndex+1)]
            
        // })
    
    }
    
    return (    
        <div className="overlay">
            <Nav 
                cart={cart} 
                handleCartLength={handleCartLength} 
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                handleIncrementQuantity={handleIncrementQuantity} 
                handleDecrementQuantity={handleDecrementQuantity} 
                itemWithQuantity={itemWithQuantity}
                total={total}
            />
            <CategoryBar />
            <Branding />
            <Hero />
            <Products 
                addCart={addItemToCart}
                handleIncrementQuantity={handleIncrementQuantity} 
                handleDecrementQuantity={handleDecrementQuantity} 
                itemWithQuantity={itemWithQuantity}
            />
            {/* <Messenger /> */}
        </div>
    )
}
export default Home
