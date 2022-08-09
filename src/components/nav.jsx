import React from 'react'

import { AiOutlineHome, AiOutlineUser, AiOutlineSnippets, AiOutlineHeart } from 'react-icons/ai'
import { GiRamProfile } from 'react-icons/gi'
import { BiHappyHeartEyes } from 'react-icons/bi'
import { MdContactless } from 'react-icons/md'

const Nav = () => {
    return (
        <div className='flex flex-row justify-center items-center z-50'>
            <div className='fixed backdrop-blur-md bottom-10 px-3 py-2 rounded-full'>
                <button onClick={() => {
                    window.location = "#home"
                }} className='rounded-full hover:bg-bg-primary-variant p-3'> <AiOutlineHome /> </button>
                <button onClick={() => {
                    window.location = "#about"
                }} className='rounded-full hover:bg-bg-primary-variant p-3'> <AiOutlineUser /> </button>
                <button onClick={() => {
                    window.location = "#experience"
                }} className='rounded-full hover:bg-bg-primary-variant p-3'> <AiOutlineSnippets /> </button>
                <button onClick={() => {
                    window.location = "#services"
                }} className='rounded-fullhover:bg-bg-primary-variant p-3'> <AiOutlineHeart /> </button>
                <button onClick={() => {
                    window.location = "#portfolio"
                }} className='rounded-full hover:bg-bg-primary-variant p-3'> <GiRamProfile /> </button>
                <button onClick={() => {
                    window.location = "#testimonials"
                }} className='rounded-full hover:bg-bg-primary-variant p-3'> <BiHappyHeartEyes /> </button>
                <button onClick={() => {
                    window.location = "#contact"
                }} className='rounded-full hover:bg-bg-primary-variant p-3'> <MdContactless /> </button>
            </div>
        </div>
    )
}

export default Nav