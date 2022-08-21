import React from 'react'
import Section from './common/Section'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import ReviewItem from './testimonials/ReviewItem'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Testimonial = () => {

    const rightBtn =
        <div className='cursor-pointer rounded-md p-3 flex flex-row items-center hover:bg-bg-primary-variant ml-2 bg-opacity-50  z-50'>
            <AiOutlineRight size={30} className='text-primary' />
        </div>

    const leftBtn =
        <div className='cursor-pointer rounded-md p-3 flex flex-row items-center hover:bg-bg-primary-variant ml-2 bg-opacity-50  z-50'>
            <AiOutlineLeft size={30} className='text-primary' />
        </div>

    const content =
        <div className='flex flex-row justify-center' >
            <Slide indicators={true} nextArrow={rightBtn} prevArrow={leftBtn} cssClass="md:!w-[32rem] !w-[20rem]" transitionDuration={300} >
                <div className="each-slide-effect">
                    <ReviewItem title={"John Sena 1"} />
                </div>
                <div className="each-slide-effect">
                    <ReviewItem title={"John Sena 2"} />
                </div>
                <div className="each-slide-effect">
                    <ReviewItem title={"John Sena 3"} />
                </div>
            </Slide>
        </div>
    return (
        <Section title={"Testimonials"} desc="Review from clients" subContent={content} />
    )
}

export default Testimonial