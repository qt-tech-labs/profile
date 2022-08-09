import React from 'react'
import ListItem from './common/ListItem'
import Section from './common/Section'
import ImgText from './common/ImgText'
import { MdCall, MdEmail } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa'
import Button from './common/Button'

const Contact = () => {
    const content =
        <div className='flex flex-row items-start'>
            <div className='flex flex-1 flex-col mr-5 items-end'>
                <ImgText icon={MdEmail} title="Email" desc="support@xxx.com" action={() => {

                }} />
                <ImgText icon={FaFacebookMessenger} title="Messenger" desc="Message to me" customClassName={"mt-5"} action={() => {

                }} />
                <ImgText icon={MdCall} title="Phone number" desc="034 369 0327" customClassName={"mt-5"} action={() => {

                }} />
            </div>
            <div className='flex flex-col flex-1 ml-5'>
                <input className='p-6 rounded-lg bg-transparent border-2 border-bg-primary-variant text-tx-secondary'
                    placeholder='Your Full Name' />
                <input className='p-6 rounded-lg bg-transparent border-2 border-bg-primary-variant text-tx-secondary my-5'
                    placeholder='Your Email' />
                <textarea className='p-6 h-40 rounded-lg bg-transparent border-2 border-bg-primary-variant text-tx-secondary'
                    placeholder='Your Message' />
                <Button title={"Send Message"} isPrimary={true} className={"mt-5"} />
            </div>
        </div>
    return (
        <Section title={"Contact"} desc="Get in touch" subContent={content} />
    )
}

export default Contact