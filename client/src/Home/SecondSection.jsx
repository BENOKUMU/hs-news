import React from 'react'
import ColumnHead from '../Common/ColumnHead/ColumnHead'

const SecondSection = () => {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/3 p-4'>
            <ColumnHead columnHeadTag="MORE TOP STORIES" />
        </div>
        <div className='w-full md:w-1/3 p-4'></div>
        <div className='w-full md:w-1/3 p-4'></div>
        
    </div>
  )
}

export default SecondSection