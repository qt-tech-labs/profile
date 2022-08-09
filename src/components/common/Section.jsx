import React from 'react'

const Section = ({id, title, desc , subContent}) => {
    return (
        <div id={id ?? title.toLowerCase()} className='flex flex-col my-16 md:px-40 px-14'>
            <p className='text-tx-secondary w-full text-center'>{desc}</p>
            <span className='text-primary text-xl text-center'>{title}</span>
            <div className='my-10'>
                {subContent}
            </div>
        </div>
    )
}

export default Section