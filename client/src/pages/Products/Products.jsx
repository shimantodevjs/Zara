import './Products.scss'
import List from '../../Components/List/List'

const Products = () => {

  return (
    <div className='products'>

      <div className="wrapper">
      <div className="right">
        <img src="https://images.unsplash.com/photo-1563314706-0dea346c5bec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2353&q=80" alt="" className="cateImg" />
        <List/>
      </div>
      </div>
    </div>
  )
}

export default Products
