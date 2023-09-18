import React from 'react'

import Slider from '../components/FrontPage/Slider.jsx';
import AboutFront from '../components/FrontPage/About_Front.jsx';
import Contact_Front from '../components/FrontPage/Contact_Front.jsx';


const Home = () => {
  return (
    <>

      <Slider />
      <AboutFront />
      <Contact_Front />

    </>
  )
}

export default Home