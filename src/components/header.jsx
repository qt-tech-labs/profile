import React from 'react'
import dummy from '../assets/dummy.pdf'
import  avatar from '../assets/avatar.png'
import {AiFillGithub, AiFillLinkedin, AiOutlineGlobal } from 'react-icons/ai'


const Header = () => {
  return (
    <header id='home' className='md:px-40 px-26 pt-40 flex flex-col justify-center'>
        <h6 className='text-center font-medium'>Hello I'm</h6>
        <h1 className='text-5xl font-bold text-center mt-5'>Jimmy Nguyen</h1>
        <p className="text-light text-center text-gray-500">Fullstack Developer</p>
        <div className="flex flex-row justify-center items-center mt-10">
            <a href={dummy} download className="text-primary rounded hover:bg-white border-primary border px-10 py-5 mr-2">Download</a>
            <a href='/' className="rounded text-bg-primary bg-primary hover:bg-white px-10 py-5 ml-2">Let's talk</a>
        </div>
        <div className='flex flex-row justify-between mt-10'>
            <div className='flex text-primary flex-col justify-end'>
                <button className='rounded-full p-3'> <AiFillGithub /> </button>
                <button className='rounded-full p-3'> <AiFillLinkedin /> </button>
                <button className='rounded-full p-3'> <AiOutlineGlobal /> </button>
            </div>
            <div className=' bg-gradient-to-b from-primary to-bg-primary pt-16 px-5 rounded-t-full'>
                <img alt='primary ' src={avatar}/>
            </div>
            <div className='flex flex-col justify-end pb-10'>
                <button className='text-primary rotate-90 bg-bg-primary'>Scroll down</button>
            </div>
        </div>
    </header>
  )
}

export default Header