import React from 'react'
import Announcement from '../Components/NavBar/indexAnnouncement'
import Navbar from '../Components/NavBar/index'
import Slider from '../Components/Slider/index'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  )
}

export default Home