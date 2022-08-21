import React from 'react'
import Section from './common/Section'
import ListItem from './common/ListItem'
import { FaAward } from 'react-icons/fa'

const Experience = () => {
    const content =
        <div className='flex flex-col md:flex-row w-full'>
            <div className='mb-2 md:mb-0 md:mr-4 hover:bg-transparent hover:border-primary border border-transparent bg-bg-primary-variant rounded-3xl flex flex-1 flex-col items-center'>
                <span className='font-bold text-primary text-xl mt-5 md:mt-7'>Backend Development</span>
                <div className='flex flex-row'>
                    <div className='flex flex-1 flex-col'>
                        <ListItem title=".Net" subTitle="Immediate" icon={FaAward} />
                        <ListItem title="NodeJS" subTitle="Immediate" />
                        <ListItem title="MongoDB" subTitle="Experienced" />
                    </div>
                    <div className='flex flex-1 flex-col'>
                        <ListItem title="Mysql" subTitle="Experienced" />
                        <ListItem title="Python" subTitle="Experienced" />
                    </div>
                </div>
            </div>
            <div className='mt-2 hover:bg-transparent hover:border-primary border border-transparent md:mt-0 md:ml-4 bg-bg-primary-variant rounded-3xl flex flex-1 flex-col items-center'>
                <span className='font-bold text-primary text-xl mt-5 md:mt-7'>Frontend Development</span>
                <div className='flex flex-row'>
                    <div className='flex flex-1 flex-col'>
                        <ListItem title="iOS" subTitle="Advanced" />
                        <ListItem title="Javascript" subTitle="Experienced" />
                        <ListItem title="ReactJS" subTitle="Experienced" />
                    </div>
                    <div className='flex flex-1 flex-col'>
                        <ListItem title="React Native" subTitle="Experienced" />
                        <ListItem title="Xamarin" subTitle="Experienced" />
                        <ListItem title="Html/css" subTitle="Immediate" />
                    </div>
                </div>
            </div>
        </div>
    return (
        <Section title="Experience" desc="What skills I have" subContent={content}> </Section>
    )
}

export default Experience