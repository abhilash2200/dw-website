import React from 'react'
import SubHeading from './sub-heading'
import Image from 'next/image'

function HowWeWork() {
  return (
    <div className='container mx-auto px-5'>
        <SubHeading text='How we work'/>
        <div className='flex flex-wrap gap-y-5 py-5'>
            <div className='w-[100%] lg:w-[50%]'>
                <p className='text-[30px]'>
                    Three Simple Actions 
                    To Help Our Clients
                </p>
            </div>
            <div className='w-[100%] lg:w-[50%]'>
                <p>Our team will discuss this with you to understand your objectives. The experts will know how you envision your brand&rsquo;s future. After that, they determine a budget based on your needs. They offer feasible solutions that&rsquo;ll help you grow.</p>
            </div>
        </div>
        <div className='flex flex-wrap gap-y-5'>
            <div className='w-[100] lg:w-[33.33%] px-3'>
                <div className='bg-[#843AFF] text-white py-5'>
                    <div className='pb-3 px-5'>
                        <p className='text-[30px]'>01.</p>
                    </div>
                    <div className='pb-3 px-5'>
                        <p className='text-[23px]'>Define Your Goals</p>
                    </div>
                    <div>
                        <Image className='ms-auto' src='/img/home/work1.png' alt='' width={400} height={250} />
                    </div>
                </div>
            </div>
            <div className='w-[100] lg:w-[33.33%] px-3'>
                <div className='bg-[#843AFF] text-white py-5'>
                    <div className='pb-3 px-5'>
                        <p className='text-[30px]'>02.</p>
                    </div>
                    <div className='pb-3 px-5'>
                        <p className='text-[23px]'>Identify Your Budget</p>
                    </div>
                    <div>
                        <Image className='ms-auto' src='/img/home/budget.png' alt='' width={400} height={250} />
                    </div>
                </div>
            </div>
            <div className='w-[100] lg:w-[33.33%] px-3'>
                <div className='bg-[#843AFF] text-white py-5'>
                    <div className='pb-3 px-5'>
                        <p className='text-[30px]'>03.</p>
                    </div>
                    <div className='pb-3 px-5'>
                        <p className='text-[23px]'>Maximize ROI</p>
                    </div>
                    <div>
                        <Image className='ms-auto' src='/img/home/flexibility.png' alt='' width={400} height={250} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowWeWork