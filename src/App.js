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

    const getAllProducts = async () => {
        try {
            const response = await axios.get('https://vitachi-ecommerce-backend.herokuapp.com/allproducts')
            setDataBaby(response.data['baby'])
            setPregnancy(response.data['pregnancy'])
            setFamily(response.data['vitamins'])
            setWomen(response.data['women'])
            setElder(response.data['elderly'])
            setMen(response.data['men'])
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllProducts();   
    }, []) 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/baby-care' element={<BabyCare data={dataBaby}/>}/>
        <Route path='/pregnancy-care' element={<PregnancyPage data={dataPregnancy}/>}/>
        <Route path='/family-care' element={<FamilyPage data={dataFamily}/>}/>
        <Route path='/women-care' element={<WomenPage data={dataWomen}/>}/>
        <Route path='/elder-care' element={<ElderPage data={dataElder}/>}/>
        <Route path='/men-care' element={<MenPage data={dataMen}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
