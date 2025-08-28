import React from 'react'
import ServiceCard from '../common/service-card'
import serviceData from '../data/services'
import Link from 'next/link'
import SubHeading from '../common/sub-heading'

function OurServices(props) {
  return (
    <div className='container mx-auto px-5'>
        <SubHeading text='Our Services'/>
        <div className='flex flex-wrap pb-5'>
            <div className='w-[100%] lg:w-[50%]'>
                <p className='text-[25px] lg:text-[30px]'>Your Needs Our Expertise, 
                Elevate with Excellence</p>
            </div>
            <div className='w-[100%] lg:w-[50%]'>
                <p>Our top-notch digital marketing services will push your brand to expand faster in the right direction.</p>
            </div>
        </div>
        <div className='flex flex-wrap justify-between gap-y-5'>
            {
                serviceData.slice(0,props.slice).map((ele,i)=>{
                    return(
                        <div key={i} className='w-[100%] lg:w-[47%]'>
                            <ServiceCard  srno={ele.srno} title={ele.serviceName} desc={ele.desc} icons={ele.icon} link={ele.link} />
                        </div>
                    )
                })
            }
        </div>
        <div className={`${props.display} flex flex-wrap justify-center items-center gap-y-5 py-12`}>
            <div className=''>
                <Link href='/services' className='border-[1px] border-[#5A53F4] px-5 py-2 rounded-full hover:bg-[#5A53F4] hover:text-[#fff] transition duration-500'>View All Services</Link>
            </div>
        </div>
    </div>
  )
}

export default OurServices