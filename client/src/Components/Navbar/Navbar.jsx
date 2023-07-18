import { useState , useEffect } from 'react';
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

const Navbar = () => {

const [menuOpen , setMenuOpen] = useState(false)

useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1023) { // Set the breakpoint for mobile and tablet devices
        setMenuOpen(false); // Close the menu on resize if the screen width is below or equal to the breakpoint
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

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
