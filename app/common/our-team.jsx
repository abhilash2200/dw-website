import React from 'react'
import SubHeading from './sub-heading'
import Image from 'next/image'
import Link from 'next/link'

function OurTeam() {

    const teamData = [
        {
            id:1,
            img:'/img/team/karndeep.jpg',
            name:'Karndeep Sutradhar',
            designation:'Director'
        },
        {
            id:2,
            img:'/img/team/nitin.jpg',
            name:'Nitin Kumar',
            designation:'CEO'
        },
        {
            id:3,
            img:'/img/team/subhajit.jpg',
            name:'Subhajit Naskar',
            designation:'Digital Head'
        },
        {
            id:4,
            img:'/img/team/abhas.jpg',
            name:'Abhas Pandia',
            designation:'Ad Expert'
        },
        {
            id:5,
            img:'/img/team/simi.jpg',
            name:'Simi Acharya',
            designation:'Ad Expert'
        },
        {
            id:6,
            img:'/img/team/banasree.jpg',
            name:'Banasree Sutradhar',
            designation:'Ad Expert'
        },
        {
            id:7,
            img:'/img/team/dibyendu.jpg',
            name:'Dibyendu Mondal',
            designation:'Accounts'
        },
        {
            id:8,
            img:'/img/team/sampad.jpg',
            name:'Sampad Das',
            designation:'Accounts'
        },
        {
            id:8,
            img:'/img/team/anirban.jpg',
            name:'Anirban Bhowmick',
            designation:'Content Writer'
        },
        {
            id:9,
            img:'/img/team/sanchary.jpg',
            name:'Sanchary Chanda',
            designation:'Graphics Designing'
        },
        {
            id:10,
            img:'/img/team/kk.jpg',
            name:'Kamalkanta Mondal',
            designation:'Graphics Designing'
        },
        {
            id:11,
            img:'/img/team/sourav.jpg',
            name:'Sourav Goswami',
            designation:'Graphics Designing'
        },
        {
            id:12,
            img:'/img/team/rukshar.jpg',
            name:'Rukshar Sheikh',
            designation:'Web Developer'
        },
        {
            id:13,
            img:'/img/team/amit.jpg',
            name:'Amit Kumar',
            designation:'Web Developer'
        },
        {
            id:14,
            img:'/img/team/shahrukh.jpg',
            name:'Mohammad Shahrukh',
            designation:'Web Developer'
        },
    ]

  return (
    <div className='container mx-auto px-5'>
        <SubHeading text="Our Team Behind It" />
        <div className='flex flex-wrap py-5'>
            <div className='w-[100%] lg:w-[60%]'>
                <p className='text-[25px]'>Get introduced to the team behind our digital marketing successes and explore the digital landscapes.</p>
            </div>
        </div>
        <div className='flex flex-wrap pt-5 gap-y-5'>
            {
                teamData.map((ele,i)=>{
                    return(
                        <div key={i} className='w-[100%] md:w-[50%] lg:w-[25%] px-3'>
                            <div className='relative'>
                                <div>
                                    <Image className='w-full border rounded-lg shadow-lg' src={ele.img} alt='' width={300} height={100}/>
                                </div>
                                <div className='absolute bottom-0 left-0 w-full'>
                                    <div className='pb-3'>
                                        <h3 className='bg-[#656ed2b4] text-white text-[20px] font-semibold inline-block py-2 px-5 rounded-e-full'>{ele.name}</h3>
                                    </div>
                                   {/*  <div className='pb-3'>
                                        <p className='bg-[#656ed2b4] text-white text-[14px] font-semibold inline-block py-1 px-5 rounded-e-full'>{ele.designation}</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='text-center pt-16'>
            <p className='text-[23px] mb-5'>Want to join us? We are Hiring!</p>
            <Link href="/contact-us" className='bg-[#11009E] text-[#fff] py-3 px-6 rounded-3xl hover:bg-[#513eff] transition duration-500'>Contact Us</Link>
        </div>
    </div>
  )
}

export default OurTeam