import { useState} from 'react';
import { KeyboardArrowDown,
         Search,
         PersonOutline,
         FavoriteBorder,
         ShoppingCartOutlined,
         Menu,
         Close
        } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Cart from '../Cart/Cart';

const Navbar = () => {

const [menuOpen , setMenuOpen] = useState(false)

const [cartOpen , setCartOpen] = useState(false)

const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

const cartToggle = () =>{
  setCartOpen(!cartOpen)
}

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='Menu-btn'>
           {menuOpen ? (
             <button onClick={menuToggle}><Close /></button>
            ) : (
           <button onClick={menuToggle}><Menu /></button>
           )}
        </div>
      

    <div className={menuOpen ? 'left-mobile' : 'left'}>
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
             <div className="cart" onClick={cartToggle}>
              <ShoppingCartOutlined />
              <span>2</span>
             </div>
           </div>
        </div>

       </div>
       {cartOpen && <Cart />}

       </div>
  )
}

export default Navbar
