import './Product.scss'
import data from '../../Components/Data/data'
import SingleProduct from '../../Components/SingleProduct/SingleProduct'
import { useParams } from 'react-router-dom';

const Product = () => {

   const { id } = useParams(); // Get the product ID from the URL parameter

  const product = data.find(item => item.id === parseInt(id))

 
  return (
    <div className='product'>
      <SingleProduct product={product} key={product.id} />
    </div>
  )
}

export default Product
