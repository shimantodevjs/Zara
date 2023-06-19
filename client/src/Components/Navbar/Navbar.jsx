import React from 'react'
import { KeyboardArrowDown,
         Search,
         PersonOutline,
         FavoriteBorder,
         ShoppingCartOutlined
        } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">

          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDown />
          </div>

          <div className="item">
            <span>USD</span>
            <KeyboardArrowDown />
          </div>

          <div className="item">
            <Link to='/products/1' className='link'>Women</Link>
          </div>

          <div className="item">
            <Link to='/products/2' className='link'>Men</Link>
          </div>

          <div className="item">
            <Link to='/products/3' className='link'>Children</Link>
          </div>
        </div>

        <div className="center">
          <Link to='/' className='link'>ZARA</Link>
        </div>

        <div className="right">
           <div className="icons">
             <Search />
             <PersonOutline />
             <FavoriteBorder />
             <div className="cart">
              <ShoppingCartOutlined />
              <span>0</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
