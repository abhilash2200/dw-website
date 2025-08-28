import Image from 'next/image'
import React from 'react'
import Form from './Form'

function ServiceHeroSection(props){
  return (
    <div className='servicesHeroSection'>
        <div className='py-14 px-5 text-center'>
            <h1 className='text-[23px] py-2'>{props.headText2}</h1>
            <p className='max-w-full w-[650px] mx-auto text-[#4C4C4C]'>{props.headText3}</p>
        </div> 
        <div className="container mx-auto px-2">
            <div className='flex flex-wrap justify-start gap-y-5'>
                <div className='w-[100%] lg:w-[50%] px-3'>
                    <div className='overflow-hidden'>
                        <Image src={props.featureImg} className=' bg-slate-200' alt='digital market' width={650} height={500}/>
                    </div>
                </div>
                <div className='w-[100%] lg:w-[50%] px-3'>
                    <Form/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceHeroSection