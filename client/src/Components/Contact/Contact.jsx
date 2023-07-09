import React from 'react'
import './Contact.scss'
import { Facebook , Instagram , Google , Twitter , Pinterest } from '@mui/icons-material'
const Contact = () => {
  return (
    <div className='contact'>
      <div className="wrapper">
        <span>BE IN TOUCH WITH US</span>
        <div className="mail">
            <input type="email" placeholder='Enter your e-mail ....' />
            <button>JOIN US</button>
        </div>
        <div className="icons">
             <Facebook />
             <Instagram />
             <Twitter />
             <Google />
             <Pinterest />
        </div>
      </div>
    </div>
  )
}

export default Contact
