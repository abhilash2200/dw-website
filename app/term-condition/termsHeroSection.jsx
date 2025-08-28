import Link from 'next/link'
import React from 'react'

function ServicesHeroSection() {
    return (
        <div className='bgs clipPath'>
            <div className='container mx-auto px-5 py-[100px]'>
                <div className='flex flex-wrap'>
                    <div className='w-[100%]'>
                        <div className='text-center mb-10 '>
                            <span className='text-4xl border-b border-gray-700 pb-5'>Term & Condition</span>
                        </div>
                        <div className='flex justify-center gap-x-3 mb-8'>
                            <Link href="/" className='text-[#11009E]'>Home</Link> - <p>Term & Condition</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServicesHeroSection