import React from 'react'
import Section from './common/Section'
import ServiceList from './services/ServiceList'

const Services = () => {
  const content =
    <div className='flex flex-col md:flex-row'>
      <ServiceList title="UI/UX Design" className="flex-1 md:mr-2" />
      <ServiceList title="Web Development" className="flex-1 my-3 md:my-0 md:mr-2" />
      <ServiceList title="Content creation" className="flex-1" />
    </div>
  return (
    <Section title="Services" desc="What I offer" subContent={content}>
    </Section>
  )
}

export default Services