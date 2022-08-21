import React from 'react'
import about2 from '../../assets/about2.jpg'

const ReviewItem = ({ title, innerRef, className }) => {
  return (
    <div ref={innerRef} className={`w-full md:h-[20rem] px-5 md:px-10 flex flex-col items-center justify-center rounded-3xl bg-bg-primary-variant ${className}`}>
      <img alt='client avatar' src={about2} className='rounded-full border-4 border-primary w-20 h-20' />
      <span className='font-bold my-5'>{title}</span>
      <p className='text-tx-secondary text-center'>Ea laboris fugiat pariatur exercitation dolore nostrud magna magna exercitation. Irure ad sit sit tempor sint. Ut adipisicing proident sunt irure laboris commodo ullamco incididunt amet sunt consectetur nulla do. Velit eu proident qui fugiat consectetur ipsum veniam proident labore sit.</p>
    </div>
  )
}

export default React.memo(ReviewItem)