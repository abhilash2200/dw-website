import React from 'react'
import Link from 'next/link';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import Image from 'next/image';

function DigitalMeeting() {
  return (
    <div className='container mx-auto px-5'>
        <div className="flex flex-wrap gap-y-6">
            <div className='w-[100%] lg:w-[33.33%] flex justify-center flex-col'>
                <p className='font-semibold text-[23px]'>More About What You Get</p>
                <p>Nemo enim ipsam volup.</p>
                <Link href='/'>Learn More</Link>
            </div>
            <div className='w-[100%] lg:w-[33.33%] flex justify-evenly flex-col'>
                <div className='flex items-center gap-4 pb-3'>
                    <div className='p-5 bg-[#5A53F4] text-white rounded-full'>
                        <ChatBubbleOutlineIcon/>
                    </div>
                    <div>
                        <p className='font-semibold'>Free Consultations</p>
                        <p>Mail us at our site for a free consultation</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 pb-3'>
                    <div className='p-5 bg-[#5A53F4] text-white rounded-full'>
                        <CardGiftcardIcon/>
                    </div>
                    <div>
                        <p className='font-semibold'>Free Consultations</p>
                        <p>Mail us at our site for a free consultation</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='p-5 bg-[#5A53F4] text-white rounded-full'>
                        <ScreenSearchDesktopIcon/>
                    </div>
                    <div>
                        <p className='font-semibold'>Free Consultations</p>
                        <p>Mail us at our site for a free consultation</p>
                    </div>
                </div>
            </div>
            <div className='w-[100%] lg:w-[33.33%] mb-10'>
                <Image className='mx-auto h-auto w-auto' src='/img/home/digital-meeting.png' alt='' width={300} height={600} />
            </div>
        </div>
    </div>
  )
}

export default DigitalMeeting