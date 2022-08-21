import React from 'react'
import ListHeader from '../common/ListHeader'
import ListItem from '../common/ListItem'
import { TiTick } from 'react-icons/ti'

const ServiceList = ({ title, className }) => {
    return (
        <div className={`${className} flex flex-col bg-bg-primary-variant border border-primary rounded-b-xl hover:bg-transparent hover:border-bg-primary-variant`}>
            <ListHeader title={title} customClassName="rounded-b-xl py-5 px-10 uppercase" />
            <div className='flex flex-col p-5'>
                <ListItem titleCustom="text-md" icon={TiTick} iconProperties={{ size: 40 }} />
                <ListItem titleCustom="text-md" icon={TiTick} iconProperties={{ size: 40 }} />
                <ListItem titleCustom="text-md" icon={TiTick} iconProperties={{ size: 40 }} />
                <ListItem titleCustom="text-md" icon={TiTick} iconProperties={{ size: 40 }} />
                <ListItem titleCustom="text-md" icon={TiTick} iconProperties={{ size: 40 }} />
                <ListItem titleCustom="text-md" icon={TiTick} iconProperties={{ size: 40 }} />
            </div>
        </div>
    )
}

export default ServiceList