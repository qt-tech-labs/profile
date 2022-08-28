import React from 'react'
import Section from './common/Section'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import ReviewItem from './testimonials/ReviewItem'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import cus1 from '../assets/cus1.jpg'
import cus2 from '../assets/cus2.jpg'

const Testimonial = () => {

    const reviews = [
        {
            title: "Hana Nguyen",
            content: "He is calm and very friendly when I have modified the requirements many times. My mind wasn't firm in telling him the requirement for the design then I told him to change it several times. At first, I thought I had to pay more money to do it, but he helped me without asking for an additional fee. Thank you so much, Jimmy.",
            avatar: cus1
        },
        {
            title: "Michel Tran",
            content: "Jimmy was my first freelancer who helped us build the first Bitcoin trade website. It is always available to answer our questions regarding technical questions or new requirements. You should hire him if you need to build any kind of software system.Thank you, Jimmy.",
            avatar: cus2
        }
    ]

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
                {
                    reviews.map(item => {
                        return <div className="each-slide-effect">
                            <ReviewItem title={item.title} ava={item.avatar} review={item.content} />
                        </div>
                    })
                }
            </Slide>
        </div>
    return (
        <Section title={"Testimonials"} desc="Review from clients" subContent={content} />
    )
}

export default Testimonial