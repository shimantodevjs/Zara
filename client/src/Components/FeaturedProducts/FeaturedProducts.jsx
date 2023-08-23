import "./FeaturedProducts.scss"
import Card from '../Card/Card'
import data from "../Data/data"

const FeaturedProducts = ({type}) => {

  const firstFourItems = data.slice(0, 4);

  return (
    <div className='featuredProducts'>
       <div className="top">
           <h1>{type} Products</h1>
       </div>
       <div className="bottom">
            {firstFourItems.map((item)=>{
              return <Card item={item} key={item.id} />
            })}
       </div>
    </div>
  )
}

export default FeaturedProducts
