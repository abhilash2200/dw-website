import React from 'react'
import AboutTop from './about-heroSection'
import AboutDw from './about-dw'
import OurValue from './our-value'
import OurTeam from '../common/our-team'
import WeProvideSupport from '../common/we-provide-support'
import HowWeWork from '../common/how-we-work'
import Faq from '../common/Faq'

function page() {
  return (
    <>
      <AboutTop/>
      <AboutDw/>
      <OurValue/>
      <OurTeam/>
      <WeProvideSupport/>
      <HowWeWork/>
      <div className='pt-5'>
        <Faq/>
      </div>
    </>
  )
}

export default page