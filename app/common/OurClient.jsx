"use client"
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import client from '../data/client';
import SubHeading from './sub-heading';
import Image from 'next/image';

function OurClient() {
  return (
    <div className='container mx-auto pb-3 px-3'>
        <SubHeading text="Our Client"/>
        <Splide aria-label="client"
            options={{
                type:'loop',
                perPage:5,
                perMove:1,
                arrows:false,
                autoplay:true,
                speed:800,
                rewindSpeed:500,
                pagination:false,
                breakpoints:{
                    640:{
                        perPage:2,
                    },
                    1200:{
                        perPage:4,
                    }
                }

            }}
        >
            {
                client.map((ele,i)=>{
                    return(
                        <SplideSlide key={i}>
                            <Image className='block m-auto p-2' src={ele.img} alt={ele.alt} width={200} height={200}/>
                        </SplideSlide>
                    )
                })
            }
        </Splide>
        <p className='text-[16px] font-semibold text-right'>And more</p>
    </div>
  )
}

export default OurClient