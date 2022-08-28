import React from 'react'

const ReviewItem = ({ title, review, ava, className }) => {
  return (
    <div className={`w-full md:h-[20rem] px-5 md:px-10 flex flex-col items-center justify-center rounded-3xl bg-bg-primary-variant ${className}`}>
      <img alt='client avatar' src={ava} className='rounded-full border-4 border-primary w-20 h-20' />
      <span className='font-bold my-5'>{title}</span>
      <p className='text-tx-secondary text-center'>{review}</p>
    </div>
  )
}

export default React.memo(ReviewItem)