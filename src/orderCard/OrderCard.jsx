import './OrderCard.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectGood
} from "../store/goodsSlice"
import { setGoodDelete } from '../store/goodsSlice';


function OrderCard() {

    const good = useSelector(selectGood)
    const dispatch = useDispatch()
  console.log(good.orders)

  
    

    
    return(
        <div className='ordercard'>
            
        <h1>Ваш заказ</h1>
        <div className='item'>
            {good.orders?.map((elem) => 
        <div >
      <img src="https://cdn.4stand.com/huge/25/8e/258e26f4ff4b54823e93695892cbe0cc39cce371.jpg" />
      <p>{elem.title}</p>
      <p>{elem.price}</p>
        </div>
        ) 
         }
       
        </div>
        <button className='btnor' >Оформить заказ</button>
        </div>
        
    )
}

export default OrderCard