import Link from 'next/link'
import React from 'react'

function ContactHeroSection() {
  return (
    <div className='bgs clipPath'>
        <div className='container mx-auto px-5 py-[100px]'>
            <div className='flex flex-wrap'>
                <div className='w-[100%]'>
                    <div className='flex justify-center gap-x-3 mb-8'>
                        <Link href="/" className='text-[#11009E]'>Home</Link> - <p>Contact Us</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-[30px] text-[#3D3C3C] font-medium leading-tight text-center'>We Are The Brand Builders</p>
            </div>
        </div>
    </div>
  )
}

export default ContactHeroSection