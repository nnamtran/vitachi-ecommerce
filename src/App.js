import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

import Home from "./pages/Home";
import BabyCare from './pages/BabyCare';
import PregnancyPage from './pages/PregnancyPage';
import FamilyPage from './pages/FamilyPage';
import WomenPage from './pages/WomenPage';
import ElderPage from './pages/ElderPage';
import MenPage from './pages/MenPage';

function App() {
  const [dataBaby, setDataBaby] = useState();
  const [dataPregnancy, setPregnancy] = useState();
  const [dataFamily, setFamily] = useState();
  const [dataWomen, setWomen] = useState();
  const [dataElder, setElder] = useState();
  const [dataMen, setMen] = useState();

  const [cart, setCart] = useState(0);
  const [itemWithQuantity, setItemWithQuantity] = useState([]);
  const [total, setTotal] = useState();

  const getAllProducts = async () => {
      try {
          const response = await axios.get('https://vitachi-ecommerce-backend.herokuapp.com/allproducts')
          setDataBaby(response.data[0]['baby'])
          setPregnancy(response.data[0]['pregnancy'])
          setFamily(response.data[0]['vitamins'])
          setWomen(response.data[0]['women'])
          setElder(response.data[0]['elderly'])
          setMen(response.data[0]['men'])
          console.log(response.data)
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
      getAllProducts();   
  }, []) 
  
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
          image: image,
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
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element={
          <Home
            cart={cart}
            itemWithQuantity={itemWithQuantity}
            total={total}
            addItemToCart={addItemToCart}
            handleCartLength={handleCartLength}
            handleIncrementQuantity={handleIncrementQuantity}
            handleDecrementQuantity={handleDecrementQuantity}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />} />
        <Route 
          path='/baby-care' 
          element={
          <BabyCare 
            data={dataBaby}
            cart={cart}
            itemWithQuantity={itemWithQuantity}
            total={total}
            addCart={addItemToCart}
            handleCartLength={handleCartLength}
            handleIncrementQuantity={handleIncrementQuantity}
            handleDecrementQuantity={handleDecrementQuantity}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />}/>
        <Route 
          path='/pregnancy-care' 
          element={
          <PregnancyPage 
            data={dataPregnancy}
            cart={cart}
            itemWithQuantity={itemWithQuantity}
            total={total}
            addCart={addItemToCart}
            handleCartLength={handleCartLength}
            handleIncrementQuantity={handleIncrementQuantity}
            handleDecrementQuantity={handleDecrementQuantity}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />}/>
        <Route 
          path='/family-care' 
          element={
          <FamilyPage 
            data={dataFamily}
            cart={cart}
            itemWithQuantity={itemWithQuantity}
            total={total}
            addCart={addItemToCart}
            handleCartLength={handleCartLength}
            handleIncrementQuantity={handleIncrementQuantity}
            handleDecrementQuantity={handleDecrementQuantity}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />}/>
        <Route 
          path='/women-care' 
          element={
          <WomenPage 
            data={dataWomen}
            cart={cart}
            itemWithQuantity={itemWithQuantity}
            total={total}
            addCart={addItemToCart}
            handleCartLength={handleCartLength}
            handleIncrementQuantity={handleIncrementQuantity}
            handleDecrementQuantity={handleDecrementQuantity}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />}/>
        <Route 
          path='/elder-care' 
          element={
          <ElderPage 
            data={dataElder}
            cart={cart}
            itemWithQuantity={itemWithQuantity}
            total={total}
            addCart={addItemToCart}
            handleCartLength={handleCartLength}
            handleIncrementQuantity={handleIncrementQuantity}
            handleDecrementQuantity={handleDecrementQuantity}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />}/>
        <Route 
          path='/men-care' 
          element={
          <MenPage 
            data={dataMen}
            cart={cart}
            itemWithQuantity={itemWithQuantity}
            total={total}
            addCart={addItemToCart}
            handleCartLength={handleCartLength}
            handleIncrementQuantity={handleIncrementQuantity}
            handleDecrementQuantity={handleDecrementQuantity}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
