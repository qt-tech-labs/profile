import React from 'react'

const ImgText = ({ icon, title, desc, action, customClassName }) => {
    return (
        <div className={`w-3/5 flex flex-col border-transparent border-2 hover:bg-transparent hover:border-2 hover:border-bg-primary-variant bg-bg-primary-variant px-10 py-5 items-center rounded-3xl ${customClassName}`}>
            {React.createElement(icon, { size: 30, className: `my-3` })}
            <span className='text-center text-white font-bold text-md'>{title}</span>
            <span className='text-center text-tx-secondary font-bold'>{desc}</span>
            {action &&
                <span onClick={() => {
                    action()
                }} className='cursor-pointer text-center text-primary mt-3 hover:border-bg-primary-variant'>Send a message</span>
            }
        </div>
    )
}

export default ImgText