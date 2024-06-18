import './Order.css';
import Footer from "./footer/Footer"
import Menu from "./menu/Menu"
import OrderCard from './orderCard/OrderCard';



function Order() {



    return(

        <div className="order">
        <Menu/>
        <OrderCard/>
        <Footer/>
      </div>
   
    )
}

export default Order