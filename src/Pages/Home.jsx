import React from 'react'
import Announcement from '../Components/NavBar/indexAnnouncement'
import Navbar from '../Components/NavBar/index'
import Slider from '../Components/Slider/index'
import Categories from '../Components/Categories'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  )
}

export default Home