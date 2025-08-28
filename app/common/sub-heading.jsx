import React from 'react'

function SubHeading(props) {
  return (
    <div className='py-3'>
        <h2 className='text-[28px] py-3'>{props.text}</h2>
        <hr/>
    </div>
  )
}

export default SubHeading