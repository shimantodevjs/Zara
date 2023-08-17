
import "./FeaturedProducts.scss"
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

  
  const data=[
     {
      id:1,
      img:'https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      img2:'https://images.unsplash.com/photo-1513374933342-24bf646c8f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      title:'Shirt & Top',
      isNew:true,
      oldPrice:'$19',
      price:'$12'
     },
     {
      id:2,
      img:'https://images.unsplash.com/photo-1627292441194-0280c19e74e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      img2:'https://images.unsplash.com/photo-1627117204847-ec306fe712bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=379&q=80',
      title:'Teal Suit',
      isNew:true,
      oldPrice:'$28',
      price:'$20'
     },
     {
      id:3,
      img:'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      img2:'https://images.unsplash.com/photo-1619603364904-c0498317e145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      title:"Khaki Overcoat",
      isNew:false,
      oldPrice:'$39',
      price:'$29'
     },
     {
      id:4,
      img:'https://images.unsplash.com/photo-1611756468665-09dd5ed49091?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
      img2:'https://images.unsplash.com/photo-1611756468043-60b953471279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
      title:"Red Jacket",
      isNew:false,
      oldPrice:'$27',
      price:'$21'
     },

  ]

  

  return (
    <div className='featuredProducts'>
       <div className="top">
           <h1>{type} Products</h1>
       </div>
       <div className="bottom">
            {data.map((item)=>{
              return <Card item={item} key={item.id} />
            })}
       </div>
    </div>
  )
}

export default FeaturedProducts
