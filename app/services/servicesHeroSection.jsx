import Link from 'next/link'
import React from 'react'

function ServicesHeroSection() {
  return (
    <div className='bgs clipPath'>
        <div className='container mx-auto px-5 py-[100px]'>
            <div className='flex flex-wrap'>
                <div className='w-[100%]'>
                    <div className='flex justify-center gap-x-3 mb-8'>
                        <Link href="/" className='text-[#11009E]'>Home</Link> - <p>Services</p>
                    </div>
                </div>
                <div className='w-[100%] lg:w-[50%]'>
                    <p className='text-[25px] font-semibold'>Transform your digital world with endless possibilities and experience our amazing services</p>
                </div>
                <div className='w-[100%] lg:w-[50%]'>
                    <p>Our main focus is to transform your digital world to the next level of success. We are providing endless possibilities for you to succeed in the field of this digital dynamic world.  You are invited to experience our amazing services and experienced professional skills to enhance your brand’s reputation.  </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesHeroSection