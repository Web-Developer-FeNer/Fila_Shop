import './App.css';
import About from './about/About';
import Aside from './aside/Aside';
import Info from './info/Info';
import Main from './main/Main';
import Menu from './menu/Menu';
import Oboi from './oboi/Oboi';
import Callback from './callback/Callback';
import Footer from './footer/Footer';
import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectGoods
} from "./store/goodsSlice"

import { setGoodNew } from './store/goodsSlice';





function App() {



  const goods = useSelector(selectGoods)
    const dispatch = useDispatch()


  const [name, setName] = useState('')
  
  const CategoryChange = (name) => {
    setName(name)
  }

  const [orders, setOrders] = useState([])


  
  const addToOrder = (item) =>  {
    
    setOrders([...orders, item])
    dispatch(setGoodNew({orders}))
    
  }


  let tes = []

  if(name === "Все" || name === ""){
      tes = goods
  } else{
      tes = goods.filter((em) => em.key === name)
  }
  

  


  return (

    <div className="App">
   
      <Menu/>
      <Oboi/>
      <Aside onClick={CategoryChange}/>
      <Main tes={tes} onAdd={addToOrder} />
      <About/>
      <Info/>
      <Callback/>
      <Footer/>
      
    </div>
 
  );


}


export default App;
