'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SubHeading from './sub-heading'
import { Button } from '@mui/material'
import { useMyContext } from '../context/MyContext'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'

function ServicesSecondSec(props) {
    const { openPopup } = useMyContext();
    return (
        <div className='container mx-auto px-3'>
            <div>
                <SubHeading text='Our Services' />
            </div>
            <div className='flex flex-wrap gap-y-5 py-5'>
                <div className='w-[100%] lg:w-[50%] px-3'>
                    <p className='text-[20px] lg:text-[30px] leading-tight max-w-full w-[700px]'>{props.ourServicesText1}</p>
                </div>
                <div className='w-[100%] lg:w-[50%] px-3'>
                    <p>{props.ourServicesText2}</p>
                </div>
            </div>
            <div className='flex flex-wrap gap-y-5 py-5'>
                <div className='w-[100%] lg:w-[33.33%] px-3'>
                    <Image className='rounded-lg' src={props.ourServicesImg1} alt='' width={500} height={334} />
                </div>
                <div className='w-[100%] lg:w-[33.33%] px-3'>
                    <Image className='rounded-lg' src={props.ourServicesImg2} alt='' width={500} height={334} />
                </div>
                <div className='w-[100%] lg:w-[33.33%] px-3'>
                    <Image className='rounded-lg' src={props.ourServicesImg3} alt='' width={500} height={334} />
                </div>
            </div>
            <div className='flex flex-wrap gap-y-5 py-5'>
                <div className='w-[100%] lg:w-[50%] px-3'>
                    <p className='text-[20px] lg:text-[40px] leading-tight pb-5'>{props.ourServicesText3}</p>
                    <Button onClick={() => openPopup(true)} className='bg-[#5A53F4] text-white hover:bg-[#11009E] hover:text-[#fff] transition-all duration-[.5s] py-2 px-5 rounded-3xl'>Enquiry Now <ArrowRightCircleIcon width={25} /></Button>
                </div>
                <div className='w-[100%] lg:w-[50%] px-3'>
                    <p>{props.ourServicesText4}</p>
                </div>
            </div>
            <div className='flex flex-wrap gap-y-5 py-5'>
                <div className='w-[100%] md:w-[50%] lg:w-[25%] px-1'>
                    <div className='rounded-lg text-center bg-[#5A53F4] text-white max-w-[100%] md:w-[300px] h-[250px] m-auto flex justify-center flex-col px-3'>
                        <p className='text-[20px] font-bold'>{props.ourServicesCardTextHead1}</p>
                        <p className='font-semibold'>{props.ourServicesCardTextDesc1}</p>
                    </div>
                </div>
                <div className='w-[100%] md:w-[50%] lg:w-[25%] px-1'>
                    <div className='rounded-lg text-center bg-[#CFCDFF] text-black max-w-[100%] md:w-[300px] h-[250px] m-auto flex justify-center flex-col px-3'>
                        <p className='text-[20px] font-bold'>{props.ourServicesCardTextHead2}</p>
                        <p className='font-semibold'>{props.ourServicesCardTextDesc2}</p>
                    </div>
                </div>
                <div className='w-[100%] md:w-[50%] lg:w-[25%] px-1'>
                    <div className='rounded-lg text-center bg-[#5A53F4] text-white max-w-[100%] md:w-[300px] h-[250px] m-auto flex justify-center flex-col px-3'>
                        <p className='text-[20px] font-bold'>{props.ourServicesCardTextHead3}</p>
                        <p className='font-semibold'>{props.ourServicesCardTextDesc3}</p>
                    </div>
                </div>
                <div className='w-[100%] md:w-[50%] lg:w-[25%] px-1'>
                    <div className='rounded-lg text-center bg-[#CFCDFF] text-black max-w-[100%] md:w-[300px] h-[250px] m-auto flex justify-center flex-col px-3'>
                        <p className='text-[20px] font-bold'>{props.ourServicesCardTextHead4}</p>
                        <p className='font-semibold'>{props.ourServicesCardTextDesc4}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSecondSec