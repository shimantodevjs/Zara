import React from 'react'
import './Card.scss'
import {Link} from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
      <div className="image">
        {item.isNew && <span className='new'>New Season</span>}
        <img src={item.img} alt="" className="mainImg" />
        <img src={item.img2} alt="" className="secondImg" />
      </div>
      <h2>{item.title}</h2>
      <div className="prices">
        <div className="oldPrice">{item.oldPrice}</div>
        <div className="price">{item.price}</div>
      </div>
    </div>
    </Link>
  )
}

export default Card
