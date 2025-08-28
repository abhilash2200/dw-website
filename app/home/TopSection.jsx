'use client'
import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useMyContext } from '../context/MyContext'

function TopSection() {
   const {openPopup} = useMyContext();
  return (
    <>
    <div className='bgs clipPath pt-5'>
        <div className='container mx-auto px-5'>
            <div className='flex flex-wrap'>
                <div className='w-[100%] lg:w-[50%] flex justify-evenly flex-col gap-y-5 lg:gap-y-8 py-5'>
                    <div>
                        <h1 className='text-[23px] lg:text-[25px] text-[#11009E] leading-[40px] lg:mb-3'>
                            Digital Marketing Company
                        </h1>
                        <h2 className='text-[21px] lg:text-[30px] leading-[40px]'>Unleash Your Brand&apos;s Potential with <br className='lg:block hidden'/>with <strong>Digital Wolf</strong></h2>
                        <Image src='/img/line.png' alt='' width={450} height={100} />
                        
                    </div>
                    <div>
                        <p className='lg:text-[20px]'>
                            We are one of the best digital marketing company that will take your company 
                            to the next level of productivity and profitability. The services will 
                            make your brand more visible and will attract more customers.
                        </p>
                    </div>
                    <div>
                        <button onClick={()=> openPopup(true)} className='rounded-full bg-[#11009E] px-10 py-3 text-white hover:bg-[#513eff] transition duration-500'>Get Free Consultation!</button>
                    </div>
                </div>
                <div className='w-[100%] lg:w-[50%]'>
                    <Image className='m-auto rounded-tl-[200px] rounded-tr-[200px] h-auto max-w-full w-[400px]' src='/img/home/hero-im.jpg' alt='' width={500} height={598} priority />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TopSection