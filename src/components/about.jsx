import React from 'react'
import about2 from '../assets/about2.jpg'
import { AiOutlineGitlab, AiOutlineFundProjectionScreen, AiOutlineUsergroupAdd } from 'react-icons/ai'
import ImgText from './common/ImgText'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const About = () => {
    return (
        <div id='about' className='flex flex-col my-16 lg:px-40 px-14'>
            <p className='text-tx-secondary w-full text-center'>Get To Know</p>
            <span className='text-primary text-xl text-center'>About me</span>
            <div className='flex flex-col md:flex-row my-10'>
                <div className='md:flex-1 flex flex-row justify-center items-center z-10'>
                    <div className='bg-gradient-to-tr from-bg-primary via-primary to-bg-primary rounded-2xl'>
                        <LazyLoadImage className='w-96 h-96 rotate-6 hover:rotate-0 rounded-2xl object-cover' sizes={30}
                            alt="dasf"
                            effect="blur"
                            src={about2} />
                    </div>
                </div>
                <div className='md:flex-1 flex flex-col mt-20 md:mt-0'>
                    <div className='md:flex-1 flex md:flex-row flex-col items-center md:justify-center '>
                        <ImgText title={"Experience"} desc={"5+ Years working"} icon={AiOutlineGitlab} customClassName="h-60 md:h-40 md:w-40 w-60" />
                        <ImgText title={"Clients"} desc={"14 clients"} icon={AiOutlineUsergroupAdd} customClassName="h-60 md:h-40 md:w-40 w-60 mx-5" />
                        <ImgText title={"Projects"} desc={"14 projects"} icon={AiOutlineFundProjectionScreen} customClassName="h-60 md:h-40 md:w-40 w-60" />
                    </div>
                    <span className='text-tx-secondary my-10 text-justify'>Adipisicing ad nulla nulla do est et consequat in exercitation do adipisicing veniam ullamco. Veniam culpa est ullamco nisi. Nostrud irure ad ex ea qui non elit. Exercitation voluptate id labore nisi amet sint ullamco.</span>
                    <button className='bg-primary p-3 rounded-md'>Let's talk</button>
                </div>
            </div>
        </div>
    )
}

export default About