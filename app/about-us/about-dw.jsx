import Image from 'next/image'
import React from 'react'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import SubHeading from '../common/sub-heading';

function AboutDw() {
    return (
        <div className='container mx-auto px-5 lg:my-10'>
            <div className='px-0 lg:px-16'>
                <SubHeading text='About DW'/>
            </div>
            <div className='flex flex-wrap justify-around gap-y-5 my-8'>
                <div className='w-[100%] lg:w-[40%]'>
                    <Image src='/img/about/about-us.png' alt='' width={400} height={700} />
                </div>
                <div className='w-[100%] lg:w-[40%] flex justify-evenly flex-col'>
                    <div className='mb-5'>
                        <p className='text-[22px] font-semibold mb-5'>Our Vision</p>
                        <p>Our aim is to create an enthusiastic and creative team globally by working together with industry-leading experts. Our partners offer distinct concepts due to their extensive background in marketing.</p>
                    </div>
                    <div>
                        <p className='text-[22px] font-semibold mb-5'>Our Mission</p>
                        <p>We take pride in joining forces with top marketing professionals to build a vibrant and dynamic global team. Our partners, who have significant experience, contribute original ideas to our marketing endeavours.</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default AboutDw