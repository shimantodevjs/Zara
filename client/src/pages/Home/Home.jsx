import React from 'react'
import ImgSlider from '../../Components/Slider/imgSlider'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import './Home.scss'
const Home = () => {

  return (
    <div className='home'>
        <ImgSlider />
        <FeaturedProducts type="Featured" />
        <FeaturedProducts type="Trending" />
    </div>
  )
}

export default Home
