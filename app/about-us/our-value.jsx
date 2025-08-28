"use client"
import { LinearProgress, linearProgressClasses, styled } from '@mui/material';
import Image from 'next/image'
import React from 'react'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#6659FA' : '#308fe8',
    },
  }));

function OurValue() {
  return (
    <div className='bg-[#322854] pt-5 lg:pt-10 pb-32 lg:pb-52 clipPath'>
        <div className="container mx-auto px-5">
            <div>
                <p className='text-[30px] font-bold pt-5 pb-2 text-white leading-tight'>Our Values: Passion, Innovation & Results</p>
                <p className='text-[15px] mb-3 text-white'>
                    We don&apos;t build marketing plans that merely work. Our marketing strategies resonate, inspire, and deliver actual results.<br/> Each idea is unique, each strategy is evolving, and each campaign will make your brand shine in a noisy digital world.
                </p>
                <hr/>
            </div>
            <div className="flex flex-wrap gap-y-5 my-8 text-white">
                <div className="w-[100%] lg:w-[50%]">
                    <p className='text-[20px] lg:text-[25px] font-semibol leading-tight'>Create rapid marketing and creative<br className='hidden lg:block'/> strategies using fresh concepts</p>
                </div>
                <div className="w-[100%] lg:w-[50%]">
                    <p className='font-semibold text-[21px] lg:text-[23px] leading-tight mb-2'>Want real, tangible results from your marketing? </p>
                    <p>Let&apos;s bring your vision to life in a way that will be remembered.</p>
                </div>
            </div>
            <div className='flex flex-wrap text-white gap-y-5'>
                <div className='w-[100%] lg:w-[30%] '>
                    <div className='bg-[#6659FA] border-[1px] px-5 py-4 h-full flex justify-evenly flex-col'>
                        <div className='pb-10 border-b-[1px] border-white'>
                            <p>01.</p>
                            <p className='font-bold text-[20px]'>Client-Centric Approach</p>
                            <p className='text-[15px]'>We listen, empathise, and offer marketing solutions that resonate with valued clients like you.</p>
                        </div>
                        <div className='pb-10 border-b-[1px] border-white'>
                            <p>02.</p>
                            <p className='font-bold text-[20px]'>Innovation & Creativity</p>
                            <p className='text-[15px]'>Our strategy combines fearless innovation with the most innovative marketing practices to put you at the top of the queue.</p>
                        </div>
                        <div>
                            <p>03.</p>
                            <p className='font-bold text-[20px]'>Teamwork & Collaboration</p>
                            <p className='text-[15px]'>We partner with you to combine our wisdom with your passion to produce standout results.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] lg:w-[40%]'>
                    <Image className='mx-auto' src='/img/about/digitalwolf-about-im2.png' alt='' width={400} height={600} />
                </div>
                <div className='w-[100%] lg:w-[30%]'>
                    <div className='border-[1px] px-5 py-7 h-[100%] flex justify-evenly flex-col'>
                        <div>
                            <p className='text-[20px]'>Learn More About Our Expertise</p>
                            <p className='text-[15px]'>Phenomenal Statistics</p>
                        </div>
                        <div className='py-5'>
                            <div className='flex justify-between pb-2'>
                                <p>AI-Powered Marketing</p>
                                <p>95%</p>
                            </div>
                            <div>
                                <BorderLinearProgress variant="determinate" value={95} />
                            </div>
                        </div>
                        <div className='py-5'>
                            <div className='flex justify-between pb-2'>
                                <p>Influencer Mastery</p>
                                <p>88%</p>
                            </div>
                            <div>
                                <BorderLinearProgress variant="determinate" value={88} />
                            </div>
                        </div>
                        <div className='py-5'>
                            <div className='flex justify-between pb-2'>
                                <p>Chatbot Optimization</p>
                                <p>83%</p>
                            </div>
                            <div>
                                <BorderLinearProgress variant="determinate" value={83} />
                            </div>
                        </div>
                        <div className='border-t-[1px] border-white'>
                            <p className='pt-5'>Visit our Help Center for more information.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurValue