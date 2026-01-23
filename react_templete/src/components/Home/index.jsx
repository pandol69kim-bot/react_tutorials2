import React from 'react'
import HeroSection from './HeroSection'
import Features from '../Features/Features'
import WorkFlow from './WorkFlow'
import Pricing from './Pricing'
import Testimonial from './Testimonial'


const index = () => {
  return (
    <div>
      <div>
        <HeroSection />
        <Features />
        <WorkFlow />
        <Pricing />
        <Testimonial />
      </div>
    </div>
    
  )
}

export default index