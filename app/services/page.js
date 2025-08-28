import React from 'react'
import ServicesHeroSection from './servicesHeroSection'
import OurServices from '../home/our-services'
import HomeAboutDw from '../home/HomeAboutDw'
import OurClient from '../common/OurClient'

function page() {
  return (
    <>
      <ServicesHeroSection/>
      <OurServices display='hidden'/>
      <div className='mt-6'>
        <HomeAboutDw/>
      </div>
      {/* <OurClient/> */}
    </>
  )
}

export default page