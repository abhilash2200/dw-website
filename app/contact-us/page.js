import React, { Suspense } from 'react'
import ContactHeroSection from './ContactHeroSection'
import ContactInfo from './contact-info'
import Faq from '../common/Faq'
import ContactMap from './contact-map'

function ContactUs() {

  return (
    <>
      <ContactHeroSection/>
      <Suspense fallback={null}>
        <ContactInfo/>
      </Suspense>
      <ContactMap/>
    </>
  )
}

export default ContactUs