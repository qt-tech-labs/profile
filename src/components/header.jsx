import React from 'react'
import av from '../assets/av.png'
import avatar from '../assets/avatar.png'
import { AiFillGithub, AiFillLinkedin, AiOutlineGlobal } from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Header = () => {
    return (
        <header id='home' className='md:px-40 px-26 lg:pt-30 pt-10 flex flex-col justify-center'>
            <h6 className='text-center font-medium'>Hello I'm</h6>
            <h1 className='text-5xl font-bold text-center mt-5'>Jimmy Nguyen</h1>
            <p className="text-light text-center text-gray-500">Fullstack Developer</p>
            <div className="flex flex-row justify-center items-center mt-10">
                <a href='https://drive.google.com/file/d/1lQMTcJFTTwkSkbVLUg3MgoEq5T9wXjok/view?usp=sharing' className="text-primary rounded hover:bg-white border-primary border px-10 py-5 mr-2">My CV</a>
                <a href='https://join.skype.com/invite/aPDyXAwdt7qY' className="rounded text-bg-primary bg-primary hover:bg-white px-10 py-5 ml-2">Let's talk</a>
            </div>
            <div className='hidden md:flex flex-row justify-between mt-10'>
                <div className='flex text-primary flex-col justify-end'>
                    <a href='https://linkedin.com/in/qt-tech' className='rounded-full p-3'> <AiFillGithub /> </a>
                    <a className='rounded-full p-3'> <AiFillLinkedin /> </a>
                    <a className='rounded-full p-3'> <AiOutlineGlobal /> </a>
                </div>
                <div className=' bg-gradient-to-b from-primary to-bg-primary pt-16 px-5 rounded-t-full'>
                    <LazyLoadImage
                        alt="dasf"
                        effect="blur"
                        src={av} />
                </div>
                <div className='flex flex-col justify-end pb-10'>
                    <span className='cursor-pointer text-primary rotate-90 bg-bg-primary'>Scroll down</span>
                </div>
            </div>
            <div className='relative md:hidden flex flex-row justify-center mt-10'>
                <div className='absolute flex text-white flex-row bottom-2'>
                    <button className='rounded-full p-3'> <AiFillGithub /> </button>
                    <button className='rounded-full p-3'> <AiFillLinkedin /> </button>
                    <button className='rounded-full p-3'> <AiOutlineGlobal /> </button>
                </div>
                <div className=' bg-gradient-to-b from-primary to-bg-primary pt-16 px-5 rounded-t-full'>
                    <img alt='primary ' src={avatar} />
                </div>
            </div>
        </header>
    )
}

export default Header