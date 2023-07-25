import React, { useState } from 'react'
import './Product.scss'
import {AddShoppingCart , FavoriteBorder , Balance} from '@mui/icons-material'

const Product = () => {

  const[selectedImg ,setSelectedImg]= useState(0)
  const [quantity, setQuantity]= useState(1)

  const images=[
    'https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1513374933342-24bf646c8f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  ]
  return (
    <div className='product'>
      <div className="wrapper">
      <div className="left">
        <div className="images">
             <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)} />
             <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>

      <div className="right">
           <h1>title</h1>
           <span className='price' >$18</span>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel harum assumenda deserunt voluptate inventore, ea ullam fuga perferendis et ratione.</p>

           <div className="quantity">
            <button 
            onClick={()=>{
              if(quantity>1){
              setQuantity(quantity-1)}
            }}
            >-</button>

            <span >{quantity}</span>

            <button
            onClick={()=>setQuantity(quantity+1)}
            >+</button>
           </div>

           <button className="addCart">
            <AddShoppingCart /> ADD TO CART
           </button>

           <div className="link">
            <div className="item">
              <FavoriteBorder /> ADD TO WISHLIST
            </div>
            <div className="item">
              <Balance /> ADD TO COMPARE
            </div>
           </div>

           <div className='copyright'>Photo Copyright &copy; 2023 Zara. All rights reserved.</div>

      </div>
      </div>
      
    </div>
  )
}

export default Product
