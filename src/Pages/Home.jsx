import React from 'react'
import Announcement from '../Components/NavBar/indexAnnouncement'
import Navbar from '../Components/NavBar/index'
import Slider from '../Components/Slider/index'
import Categories from '../Components/Categories'
import Products from '../Components/Products'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  )
}

export default Home