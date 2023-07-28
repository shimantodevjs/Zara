import React from 'react'
import './Categories.scss'
import { Grid} from '@mui/material'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
      <Grid container spacing={1} className='gridContainer'>

      <Grid item xs={12} md={6} lg={3} className='gridItem' >
          <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
          <Link to='/products/1' className='link'>
          <button>
             sale
          </button>
          </Link>
      </Grid>

      
     
      <Grid item xs={12} md={6} lg={6} className='gridItem'  >
          <img src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
          <Link to='/products/3' className='link'>
          <button>
             new season
          </button>
          </Link>
      </Grid>
       
       <Grid item xs={12} md={6} lg={3} className='gridItem'>
          <img src="https://images.unsplash.com/photo-1550896026-50bc5e53beda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
            <Link to='/products/4' className='link'>
          <button>
             men
          </button>
            </Link>
        </Grid>

        <Grid item xs={12} md={6} lg={3} className='gridItem' >
          <img src="https://images.unsplash.com/photo-1592948078640-39656341be54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <Link to='/products/2' className='link'>
          <button>
             women
          </button>
          </Link>
      </Grid>

        <Grid item xs={12} md={6} lg={3} className='gridItem'>
              <img src="https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWNjZXNzb3JpZXN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
              <Link to='/products/5' className='link'>
              <button>
                 accessories
              </button>
              </Link>
        </Grid>

  
        
        <Grid item xs={12} md={6} lg={6} className='gridItem'>
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        <Link to='/products/6' className='link'>
          <button>
             shoes
          </button>
           </Link>
          </Grid>
         
      </Grid>
    </div>
  )
}

export default Categories
