import { Skeleton } from '@mui/material'
import React from 'react'
import SubHeading from '../common/sub-heading'

function SkeletonBlogList() {
  return (
    <div className='container mx-auto px-4'>
        <SubHeading text='Blogs' />
        <div className='flex flex-wrap justify-center gap-y-3'>
            <div className='w-full lg:w-[33%] px-2'>
                <Skeleton className='mb-2' variant="rounded" sx={{width: '1000px', maxWidth: '100%', height:{xs:'250px', lg:'350px'}}} />
                <div className='py-2 flex justify-between px-2 items-center'>
                    <Skeleton variant="rounded" sx={{width: '100px', height:'10px'}} />
                    <Skeleton variant="rounded" sx={{width: '100px', height:'10px'}} />
                </div>
                 <div className='my-4'>
                    <Skeleton className='mb-2' variant="rounded" sx={{width: '1000px', maxWidth: '100%', height:'30px'}} />
                    <Skeleton className='mb-2' variant="rounded" sx={{width: '1000px', maxWidth: '100%', height:'10px'}} />
                    <Skeleton className='mb-2' variant="rounded" sx={{width: '200px', maxWidth: '100%', height:'10px'}} />
                </div>
            </div>
            <div className='w-full lg:w-[33%] px-2'>
                <Skeleton className='mb-2' variant="rounded" sx={{width: '1000px', maxWidth: '100%', height:{xs:'250px', lg:'350px'}}} />
                <div className='py-2 flex justify-between px-2 items-center'>
                    <Skeleton variant="rounded" sx={{width: '100px', height:'10px'}} />
                    <Skeleton variant="rounded" sx={{width: '100px', height:'10px'}} />
                </div>
                 <div className='my-4'>
                    <Skeleton className='mb-2' variant="rounded" sx={{width: '1000px', maxWidth: '100%', height:'30px'}} />
                    <Skeleton className='mb-2' variant="rounded" sx={{width: '1000px', maxWidth: '100%', height:'10px'}} />
                    <Skeleton className='mb-2' variant="rounded" sx={{width: '200px', maxWidth: '100%', height:'10px'}} />
                </div>
            </div>
            <div className='w-full lg:w-[33%] px-2'>
                <Skeleton className='mb-2' variant="rounded" sx={{width: '1000px', maxWidth: '100%', height:{xs:'250px', lg:'350px'}}} />
                <div className='py-2 flex justify-between px-2 items-center'>
                    <Skeleton variant="rounded" sx={{width: '100px', height:'10px'}} />
                    <Skeleton variant="rounded" sx={{width: '100px', height:'10px'}} />
                </div>
                 <div className='my-4'>
                    <Skeleton className='mb-2' variant="rounded" sx={{width: '1000px', maxWidth: '100%', height:'30px'}} />
                    <Skeleton className='mb-2' variant="rounded" sx={{width: '1000px', maxWidth: '100%', height:'10px'}} />
                    <Skeleton className='mb-2' variant="rounded" sx={{width: '200px', maxWidth: '100%', height:'10px'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkeletonBlogList