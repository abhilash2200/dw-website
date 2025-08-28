import React from 'react'
import SubHeading from './sub-heading'

function Conclusion(props) {
  return (
    <div className='container mx-auto px-5 '>
        <div>
            <SubHeading text='Conslusion' />
        </div>
        <div className='flex flex-wrap gap-y-5 pt-5'>
            <div className='w-[100%] lg:w-[30%] px-3 flex justify-center flex-col'>
                <p className='text-[30px]'>{props.conclusionHead}</p>
            </div>
            <div className='w-[100%] lg:w-[70%] px-3'>
                <p className='pb-3'>{props.conclusionDesc}</p>
            </div>
        </div>
    </div>
  )
}

export default Conclusion