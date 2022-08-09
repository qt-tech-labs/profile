import React, { useEffect, useRef, useState } from 'react'
import Section from './common/Section'
// import about2 from '../assets/about2.jpg'
import ReviewItem from './testimonials/ReviewItem'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Testimonial = () => {
    const carousel = useRef(null)

    var [currentReview, setCurrentReview] = useState(1)
    var [isInitiated, setIsInitiated] = useState(false)

    useEffect(() => {
        // if (isInitiated) {
        //     return
        // }
        // setIsInitiated(true)
        console.log("useEffect", isInitiated)

        let first = carousel.current.children[0].cloneNode(true)
        let last = carousel.current.children[carousel.current.children.length - 1].cloneNode(true)

        carousel.current.insertBefore(last, carousel.current.children[0])
        carousel.current.append(first)

        carousel.current.style.transitionDuration = "0.0s"
        carousel.current.style.transform = `translate(-36rem)`

        const timer = setInterval(() => {
            console.log("do after 1s")
            // move(false)
        }, 5000);

        return () => {
            clearInterval(timer)
        }
    }, [])

    const move = (isLeft) => {
        console.log("RMove from:", currentReview)
        const nextReview = isLeft ? currentReview - 1 : currentReview + 1
        setCurrentReview(nextReview)
        console.log("RMove to !!", nextReview)
        carousel.current.style.transitionDuration = '1.0s'
        carousel.current.style.transform = `translate(-${36 * nextReview}rem)`

        if ((!isLeft && nextReview === carousel.current.children.length - 1)
            || (isLeft && nextReview === 0)) {
            const runAtLast = setTimeout(() => {
                carousel.current.style.transitionDuration = '0.0s'
                carousel.current.style.transform = `translate( ${isLeft ? "-" : "-"}${(isLeft ? carousel.current.children.length - 2 : 1) * 36}rem)`
                clearTimeout(runAtLast)
                setCurrentReview(isLeft ? carousel.current.children.length - 2 : 1)
            }, 1000);
        }
    }

    const content =
        <div className='flex flex-col items-center'>
            <div className='flex flex-row justify-center'>
                <div onClick={() => { move(true) }} className='cursor-pointer rounded-md p-3 flex flex-row items-center hover:bg-bg-primary-variant mr-2 z-50'>
                    <AiOutlineLeft size={30} className='text-primary' />
                </div>
                <div className='md:w-[36rem] md:h-[20rem] rounded-3xl overflow-hidden'>
                    <div ref={carousel} className='flex flex-row w-fit'>
                        <ReviewItem title={"John Sena 1"} />
                        <ReviewItem title={"John Sena 2"} />
                        <ReviewItem title={"John Sena 3"} />
                        <ReviewItem title={"John Sena 4"} />
                        <ReviewItem title={"John Sena 5"} />
                    </div>
                </div>
                <div onClick={() => {
                    move(false)
                }} className='cursor-pointer rounded-md p-3 flex flex-row items-center hover:bg-bg-primary-variant ml-2 bg-opacity-50  z-50'>
                    <AiOutlineRight size={30} className='text-primary' />
                </div>
            </div>
            <div className='flex flex-row my-2'>
                {/* eslint-disable-next-line  */}
                <a href='/' className='bg-bg-primary-variant mx-1 w-2 h-2 rounded-full'></a>
                {/* eslint-disable-next-line  */}
                <a href='/' className='bg-bg-primary-variant mx-1 w-2 h-2 rounded-full'></a>
                {/* eslint-disable-next-line  */}
                <a href='/' className='bg-primary mx-1 w-2 h-2 rounded-full'></a>
                {/* eslint-disable-next-line  */}
                <a href='/' className='bg-bg-primary-variant mx-1 w-2 h-2 rounded-full'></a>
            </div>
        </div >
    return (
        <Section title={"Testimonials"} desc="Review from clients" subContent={content} />
    )
}

export default Testimonial