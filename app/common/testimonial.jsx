'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import SubHeading from './sub-heading'
import Image from 'next/image'
import Link from 'next/link'
import { Google } from '@mui/icons-material'
import { reviewData } from '../data/review'

function Testimonial() {

/*     const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]) */

    return (
        <div className='container mx-auto px-3'>
            <div>
                <SubHeading text="Our Client Reviews" />
                <div className='flex flex-wrap gap-y-5 py-5'>
                    <div className='w-[100%] lg:w-[50%]'>
                        <p className='text-[25px]'>Witness the Impact of
                            Our 😉 Customer Stories</p>
                    </div>
                    <div className='w-[100%] lg:w-[50%]'>
                        Get to know what they are talking about in our work and collaborative campaigns. Check out the testimonials of our clients to gain trust in us for your future endeavours.
                    </div>
                </div>
                <Splide aria-label="client"
                    options={{
                        type: 'loop',
                        perPage: 3,
                        perMove: 1,
                        arrows: false,
                        autoplay: true,
                        speed: 800,
                        rewindSpeed: 500,
                        pagination: true,
                        breakpoints: {
                            640: {
                                perPage: 1,
                            },
                            1200: {
                                perPage: 2,
                            }
                        }

                    }}
                >
                    {
                        reviewData.map((ele, i) => {
                            return (
                                <SplideSlide key={i}>
                                    <div className='border-2 border-[#11009E] py-5 px-4 mx-1.5 h-full'>
                                        <div className='flex gap-3'>
                                            <Image src={ele.star} alt='' width={100} height={100} />
                                            <Link href={ele.rwL} target='_b'>
                                                <Google />
                                            </Link>
                                        </div>
                                        <div className='flex gap-x-3 py-5'>
                                            <div>
                                                <Image src={ele.profilePic} alt='' width={50} height={100} />
                                            </div>
                                            <div>
                                                <p className='font-bold'>{ele.reviewName}</p>
                                                <p>{ele.designation}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>{ele.review}</p>
                                        </div>
                                    </div>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
               {/*  <div className="embla h-full" ref={emblaRef}>
                    <div className="embla__container">
                        {
                            reviewData.map((ele, i) => {
                                return (
                                    <div key={i} className="embla__slide">
                                        <div className='border-2 border-[#11009E] py-5 px-4 h-full'>
                                            <div className='flex gap-3'>
                                                <Image src={ele.star} alt='' width={100} height={100} />
                                                <Link href={ele.rwL} target='_b'>
                                                    <Google />
                                                </Link>
                                            </div>
                                            <div className='flex gap-x-3 py-5'>
                                                <div>
                                                    <Image src={ele.profilePic} alt='' width={50} height={100} />
                                                </div>
                                                <div>
                                                    <p className='font-bold'>{ele.reviewName}</p>
                                                    <p>{ele.designation}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>{ele.review}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> */}
            </div>
            <div className='pt-8 flex justify-center'>
                <Link target='_b' className='border-[1px] border-[#5A53F4] px-5 py-2 rounded-full hover:bg-[#5A53F4] hover:text-[#fff] transition duration-500' href='https://www.google.com/search?q=digital+wolf&rlz=1C1UEAD_enIN1028IN1028&oq=digital+wol&gs_lcrp=EgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIMCAMQABgKGLEDGIAEMgkIBBAAGAoYgAQyBggFEEUYPDIGCAYQRRg9MgYIBxBFGDzSAQgzOTI1ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8#lrd=0x3a027125f0b85a61:0xe9d5ef4252915a51,1,,,,'>View More On Google</Link>
            </div>
        </div>
    )
}

export default Testimonial