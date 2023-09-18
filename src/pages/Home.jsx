import React from 'react'

import Slider from '../components/FrontPage/Slider.jsx';
import AboutFront from '../components/FrontPage/About_Front.jsx';
import Contact_Front from '../components/FrontPage/Contact_Front.jsx';
import Service_Front from '../components/FrontPage/Service_Front.jsx';
import Customer_Front from '../components/FrontPage/Customer_Front.jsx';
import Team_Front from '../components/FrontPage/Team_Front.jsx';
import News_Front from '../components/FrontPage/News_Front.jsx';

const Home = () => {
  return (
    <>

      <Slider />
      <AboutFront />
      <Contact_Front />
      <Service_Front/>
      <Customer_Front/>
      <Team_Front/>
      <News_Front/>
    </>
  )
}

export default Home