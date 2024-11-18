import React from 'react'
import LandingPage from './LandingPage'
import OurClients from './OurClients'
import WhyChoose from './WhyChoose'
import Tchnology from './Tchnology'
import Recommendation from './Recommendation'
import BlogSection from './BlogSection'
import HomeServices from './HomeServices'
import ProcessHome from './ProcessHome'
import PlansHome from './PlansHome'
import Work from './Work'

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
      <Work/>
      <BlogSection/>
    </div>
  )
}

export default Body
