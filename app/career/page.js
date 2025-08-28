import Link from 'next/link'
import React from 'react'
import SubHeading from '../common/sub-heading'
import Image from 'next/image'
import { Button } from '@mui/material'

function Career() {
    return (
        <div>
            <div className='bgs clipPath'>
                <div className='container mx-auto px-5 py-[100px]'>
                    <div className='flex flex-wrap'>
                        <div className='w-[100%]'>
                            <div className='flex justify-center gap-x-3 mb-8'>
                                <Link href="" className='text-[#11009E]'>Home</Link> - <p>Career</p>
                            </div>
                        </div>
                        <div className='w-[100%] lg:w-[50%]'>
                            <p className='text-[25px] text-[#3D3C3C]'>Build Your Career With
                            Digital Wolf</p>
                        </div>
                        <div className='w-[100%] lg:w-[50%]'>
                            <p>Want to make your career with us?<br/>
                            As you know, we are the best provider of digital marketing services. Our company, Digital Wolf, gives a chance to aspiring professionals or interns to make their career. We are committed to providing you with the best employment possibilities.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-5'>
                <SubHeading text='Career'/>
                <div className='flex flex-wrap gap-y-3'>
                    <div className='w-full lg:w-[50%] px-2'>
                        <p className='text-[#5A5A5A]'>Our company offers you job roles in the domain of SEO, web design, SMO, content writing, software development, pay-per-click ads and many more.</p>
                    </div>
                    <div className='w-full lg:w-[50%] px-2'>
                        <p className='text-[#5A5A5A]'>
                            So, if you want to get betterment in your career then make us your career partner. You will have massive growth in your business also. As a professional partner of ours, you will receive a proper amount in your salary and get the best professional exposure.
                        </p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-5 pt-10'>
                {
                    [1,2,3,4,5].map((_,i)=>{
                        return(
                            <div key={i} className='flex flex-wrap py-4'>
                                <div className='w-full lg:w-[70%] bg-[#D6D6FF] career-clipPath'>
                                    <div className='px-5 flex justify-around flex-col h-full'>
                                        <h2 className='text-[30px] font-semibold'>SEO Executive</h2>
                                        <ul className='leading-8 list-disc ps-6'>
                                            <li>Experience: 2-3 Years or above</li>
                                            <li>Work From Office Only</li>
                                            <li>Job Type: Full-time</li>
                                        </ul>
                                        <div>
                                            <Button className='bg-[#11009E] text-[#FFF] hover:bg-[#4a3fac] px-5 py-2 rounded-none'>Apply Now</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full lg:w-[30%]'>
                                    <Image className='career-img-clipPath' src='/img/career/career1.jpg' width={400} height={100} alt='career1'/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Career