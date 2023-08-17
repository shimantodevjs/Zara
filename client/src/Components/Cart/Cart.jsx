import React from 'react'
import './Cart.scss'
import { DeleteOutlined } from '@mui/icons-material'

const Cart = () => {
    const data =[
        {
             id:1,
             img:'https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
             img2:'https://images.unsplash.com/photo-1513374933342-24bf646c8f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
             title:'Shirt & Top',
             isNew:true,
             oldPrice:'$19',
             price:'$12'
        },
         {
      id:2,
      img:'https://images.unsplash.com/photo-1627292441194-0280c19e74e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      img2:'https://images.unsplash.com/photo-1627117204847-ec306fe712bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=379&q=80',
      title:'Teal Suit',
      isNew:true,
      oldPrice:'$28',
      price:'$20'
     },
    ]
  return (
    <div className='cartContainer'>
       <h1>Products in your cart</h1>
       {data?.map(item=>(
         <div className="item" key={item.id}>
               <img src={item.img} alt="" />
               <div className="details">
                 <h1>{item.title}</h1>
                 <div className="price">1 x ${item.price}</div>
               </div>
               <DeleteOutlined className='delete' />
         </div>
       ))
       }
       <div className="total">
        <span>SUBTOTAL</span>
        <span className='priceTotal'>$123</span>
       </div>

       <button>PROCEED TO CHECKOUT</button>

       <span className="reset">Reset Cart</span>
       
    </div>
  )
}

export default Cart
