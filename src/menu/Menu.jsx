import React from "react";
import "./Menu.css"
import { FaShoppingCart } from 'react-icons/fa';




function Menu() {


    return(

        <div className="menu">
        <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="/#main">Каталог</a></li>
          <li><a href="/#about">О нас</a></li>
          <li><a href="/#callback">Контакты</a></li>
          
          <li><a href="/order"><FaShoppingCart className="icon"/></a></li>
        </ul>
      </div>
   
    )
}

export default Menu