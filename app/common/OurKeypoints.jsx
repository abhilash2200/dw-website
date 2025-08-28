import React from 'react'
import SubHeading from './sub-heading'
import parse from 'html-react-parser'

function OurKeypoints(props) {
  return (
    <div className='container mx-auto px-5'>
        <div>
            <SubHeading text='Our Keypoints'/>
        </div>
        <div>
            <p className='text-[30px]'>{parse(props.keyPointsHead)}</p>
        </div>
        <div className='flex flex-wrap gap-y-5 py-5'>
            {
                props.keyPointsCard.map((ele,i)=>{
                    return(
                        <div key={i} className='w-[100%] lg:w-[25%] px-2 mb-5'>
                            <div className={`bg-[#F8F8F8] px-5 py-5 lg:h-[600px] ${ele.marginTop}`}>
                                <p className='text-[23px] font-bold mb-3'>{ele.keyPointsCardHead}</p>
                                <p>{ele.keyPointsCardDesc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default OurKeypoints