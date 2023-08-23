import './SingleProduct.scss'
import React, { useState } from 'react'
import {AddShoppingCart , FavoriteBorder , Balance} from '@mui/icons-material'


const SingleProduct = ({ product }) => {

 
  
  const[selectedImg ,setSelectedImg]= useState(0)

  const [quantity, setQuantity]= useState(1)

  const images = [product.img, product.img2];

  return (
    <div className='singleProduct'>
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
           <h1>{product.title}</h1>
           <span className='price' >{product.price}</span>
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

export default SingleProduct
