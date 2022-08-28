import React from 'react'
import Button from '../common/Button'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const PortfolioCard = ({ title, image, github, demo }) => {
    return (
        <div className='flex flex-col p-3 border-2 border-transparent bg-bg-primary-variant hover:bg-transparent hover:border-bg-primary-variant hover:border-2 rounded-2xl'>
            <LazyLoadImage className="rounded-2xl w-full h-60 object-cover"
                alt="asdh"
                effect="blur"
                src={image} />
            <span className='font-bold text-white my-3'>{title ?? "Deserunt laborum aliquip eiusmod laborum tempor eu laborum nostrud exercitation."}</span>
            <div className='flex flex-row'>
                <Button action={() => {
                    // TODO
                    window.open(github, '_blank', 'noopener,noreferrer');
                }} title={"Github"} isPrimary={false} className="mr-2" />
                {/* <Button title={"Live Demo"} isPrimary={true} /> */}
            </div>
        </div>
    )
}

export default PortfolioCard