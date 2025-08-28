import Link from 'next/link'
import React from 'react'

function BlogHeroSection() {
  return (
    <div className='bgs clipPath'>
        <div className='container mx-auto px-5 py-[100px]'>
            <div className='flex flex-wrap'>
                <div className='w-[100%]'>
                    <div className='flex justify-center gap-x-3 mb-8 text-[30px]'>
                        <Link href="" className='text-[#11009E]'>Home</Link> - <p className=''>Our Blogs</p>
                    </div>
                </div>
                <div className='w-[100%] text-center'>
                    {/* <p className='text-[25px] font-semibold'>Where Ideas Blossom Cultivating Creativity in Every Altus Blog Post</p> */}
                </div>
                {/* <div className='w-[100%] lg:w-[50%]'>
                    <p>Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default BlogHeroSection