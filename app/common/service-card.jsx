import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function ServiceCard(props) {
  return (
    <div className='flex border-[1px] gap-y-3 border-[#ccc] pt-[13px] px-[5px] pb-[27px] lg:p-7 h-[100%] hover:bg-[#f2f2fe] bg-[#EBEAFF] shadow-lg rounded'>
        <div className='flex justify-between flex-col w-[20%]'>
            <p className='text-[23px] text-center font-semibold'>[{props.srno}]</p>
            <Image className='grayscale-[90%]' src={props.icons} alt='icons' width={100} height={100} />
        </div>
        <div className='w-[80%]'>
            <Link className='font-bold text-[20px]' href={props.link}>{props.title}</Link>
            <p className='lg:py-10 pt-5 pb-8'>{props.desc}</p>
            <Link className='bg-[#11009E] px-5 py-3 rounded-full text-white hover:bg-[#513eff] transition duration-500' href={props.link}>Learn More <ArrowRightAltIcon/></Link>
        </div>
    </div>
  )
}

export default ServiceCard