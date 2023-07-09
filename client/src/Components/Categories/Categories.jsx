import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <img src="https://images.unsplash.com/photo-1576827471288-0a8f6d6c937b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="" />
          <button>
             <Link to='/products/1' className='link'>sale</Link>
          </button>
        </div>
        <div className="row">
          <img src="https://images.unsplash.com/photo-1592948078640-39656341be54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <button>
             <Link to='/products' className='link'>women</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
          <button>
             <Link to='/products' className='link'>new season</Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row"><img src="https://images.unsplash.com/photo-1550896026-50bc5e53beda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
          <button>
             <Link to='/products' className='link'>men</Link>
          </button>
          </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWNjZXNzb3JpZXN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
              <button>
                 <Link to='/products' className='link'>accessories</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row"><img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
          <button>
             <Link to='/products' className='link'>shoes</Link>
          </button>
          </div>
      </div>
    </div>
  )
}

export default Categories
