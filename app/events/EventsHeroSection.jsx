import Link from 'next/link'
import React from 'react'

function EventsHeroSection() {
  return (
    <div className='bgs clipPath'>
        <div className='container mx-auto px-5 py-[100px]'>
            <div className='flex flex-wrap'>
                <div className='w-[100%]'>
                    <div className='flex justify-center gap-x-3 mb-8'>
                        <Link href="" className='text-[#11009E]'>Home</Link> - <p>Events</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-[25px] font-semibold text-center'>Happy To Share</p>
            </div>
        </div>
    </div>
  )
}

export default EventsHeroSection