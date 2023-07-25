import React, { useState } from 'react'
import './Products.scss'
import { useParams } from 'react-router-dom'
import List from '../../Components/List/List'

const Products = () => {
   
   const cateId = parseInt(useParams().id)

   const [maxPrice , setMaxPrice]= useState(1000)

   const [sort , setSort]= useState(null)


  return (
    <div className='products'>

      <div className="wrapper">
      <div className="left">

         <div className="filterItem">
          <h2>Product categories</h2>
          <div className="inputItem">
               <input type="checkbox" id="1" value={1} />
               <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
               <input type="checkbox" id="2" value={2} />
               <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
               <input type="checkbox" id="3" value={3} />
               <label htmlFor="3">Coats</label>
          </div>
         </div>

         <div className="filterItem">
             <h2>Filter by Price</h2>
             <div className="inputItem price">
              <span>0</span>
              <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
             </div>
         </div>

         <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" name="price" id="asc" value='asc' onChange={(e)=>setSort('asc')} />
            <label htmlFor="asc">Cheap First</label>
          </div>
          <div className="inputItem">
            <input type="radio" name="price" id="desc" value='desc' onChange={(e)=>setSort('desc')} />
            <label htmlFor="desc">Expensive First</label>
          </div>
         </div>
      </div>
      <div className="right">
        <img src="https://images.unsplash.com/photo-1548705085-101177834f47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt="" className="cateImg" />
        <List cateId={cateId} maxPrice={maxPrice} sort={sort}/>
      </div>
      </div>
    </div>
  )
}

export default Products
