import React from 'react'

const ColumnHead = ({columnHeadTag}) => {
  return (
    <div>
        <div className='relative'></div>
        <div className='h-1 absolute left-0 top-0 w-4 bg-red-700'></div>
        <p className='text-sm font-bold my-2'>
            {columnHeadTag}
        </p>
    </div>
  )
}

export default ColumnHead