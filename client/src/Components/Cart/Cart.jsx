import React from 'react'
import './Cart.scss'
import { DeleteOutlined , Clear } from '@mui/icons-material'
import { useDispatch, useSelector} from 'react-redux'
import { removeItemFromCart,resetCart } from '../../Redux/cartSlice'

const Cart = ({ cartToggle }) => {
  const cartItems= useSelector(state=>state.cart)
  const dispatch= useDispatch()

  const handleRemoveItem=(itemId)=>{
      dispatch(removeItemFromCart(itemId))
  }

  const handleResetCart = () => {
    dispatch(resetCart());
  };

  const totalPrice = () => {
    let total = 0
    cartItems.forEach((item) => total += item.price * item.quantity);
    return total
  };


  return (
    <div className='cartContainer'>
      <h1>Cart</h1>
      <div className="top">
       <Clear onClick={cartToggle} />
       </div>
       {cartItems?.map(item=>(
         <div className="item" key={item.id}>
               <img src={item.img} alt="" />
               <div className="details">
                 <h1>{item.title}</h1>
                 <div className="price">{item.quantity} x {item.price} ₽</div>
               </div>
               <span onClick={() => handleRemoveItem(item.id)}>
               <DeleteOutlined className='delete'/>
               </span>
         </div>
       ))
       }
       <div className="total">
        <span>SUBTOTAL</span>
        <span className='priceTotal'>{totalPrice()} ₽</span>
       </div>

       <button>PROCEED TO CHECKOUT</button>

       <span className="reset" onClick={handleResetCart}>Reset Cart</span>
       
    </div>
  )
}

export default Cart
