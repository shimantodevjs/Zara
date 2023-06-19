import React from 'react'
import SliderComp from '../../Components/Slider/Slider'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import './Home.scss'
const Home = () => {
  return (
    <div className='home'>
        <SliderComp />
        <FeaturedProducts type="featured" />
        <FeaturedProducts type="trending" />
    </div>
  )
}

export default Home
