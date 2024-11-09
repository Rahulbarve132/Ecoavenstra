import React from 'react'
import LandingPage from './LandingPage'
import OurClients from './OurClients'
import WhyChoose from './WhyChoose'
import Tchnology from './Tchnology'
import Testimonials from './Testimonials'
import Recommendation from './Recommendation'
import BlogSection from './BlogSection'
import HomeServices from './HomeServices'
import ProcessHome from './ProcessHome'
import PlansHome from './PlansHome'

const Body = () => {
  return (
    <div>
      <LandingPage/>
      <OurClients/>
      <HomeServices/>
      <WhyChoose/>
      <ProcessHome/>
      <Tchnology/>
      <PlansHome/>
      <Recommendation/>
      <Testimonials/>
      <BlogSection/>
    </div>
  )
}

export default Body
