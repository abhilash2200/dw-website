import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function WeProvideSupport() {
  return (
    <div className='container mx-auto px-4'>
        <div className='flex flex-wrap mt-16 clipPath'>
            <div className='w-[100%] lg:w-[50%] bg-[#8F8AFF] flex justify-center flex-col '>
                <div className='w-[500px] max-w-full mx-auto px-5'>
                    <div className='py-5'>
                        <p className='text-[22px] lg:text-[30px] text-white'>We Provide 24X7 Support & Budget Friendly Solutions</p>
                    </div>
                    <div>
                    <button className='mb-5 rounded-full bg-white px-10 py-3 text-[#11009E] hover:bg-[#11009E] hover:text-white transition duration-500'>
                    <Link href='/services' className=''>View All Services <ArrowCircleRightIcon/></Link>
                        </button> 
                    </div>
                </div>
            </div>
            <div className='w-[100%] lg:w-[50%]'>
                <Image src='/img/home/dg-mar.jpg' alt='' width={1000} height={500} />
            </div>
        </div>
    </div>
  )
}

export default WeProvideSupport