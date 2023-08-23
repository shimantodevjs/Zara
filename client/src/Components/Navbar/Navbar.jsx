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
import { useSelector, useDispatch } from 'react-redux';
import {setSelectedGender} from '../../Redux/genderSlice'

const Navbar = () => {

const selectedGender = useSelector((state) => state.gender);
  const dispatch = useDispatch();

const handleGenderClick = (gender) => {
    dispatch(setSelectedGender(gender));
  };

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
              <Link to='/products/1' className={`link ${selectedGender === 'female' ? 'active' : ''}`} onClick={() => handleGenderClick('female')}>Women</Link>
           </div>
           <div className="item">
              <Link to='/products/2' className={`link ${selectedGender === 'male' ? 'active' : ''}`} onClick={() => handleGenderClick('male')}>Men</Link>
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
