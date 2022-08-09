import React from 'react'
import about2 from '../../assets/about2.jpg'
import Button from '../common/Button'

const PortfolioCard = ({ title, image, github, demo }) => {
    return (
        <div className='flex flex-col p-3 border-2 border-transparent bg-bg-primary-variant hover:bg-transparent hover:border-bg-primary-variant hover:border-2 rounded-2xl'>
            <img alt='Portfolio' src={image ?? about2}
                className="rounded-2xl h-60 object-cover"
            />
            <span className='font-bold text-white my-3'>{title ?? "Deserunt laborum aliquip eiusmod laborum tempor eu laborum nostrud exercitation."}</span>
            <div className='flex flex-row'>
                <Button action={() => {
                    // TODO
                }} title={"Github"} isPrimary={false} className="mr-2" />
                <Button title={"Live Demo"} isPrimary={true} />
            </div>
        </div>
    )
}

export default PortfolioCard