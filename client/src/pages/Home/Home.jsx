import React from 'react'
import ImgSlider from '../../Components/Slider/imgSlider'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import Categories from '../../Components/Categories/Categories'
import Contact from '../../Components/Contact/Contact'
import './Home.scss'

const Home = () => {

  return (
    <div className='home'>
        <ImgSlider />
        <FeaturedProducts type="Featured" />
        <Categories />
        <FeaturedProducts type="Trending" />
        <Contact />
    </div>
  )
}

export default Home
