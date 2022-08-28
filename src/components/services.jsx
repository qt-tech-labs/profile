import React from 'react'
import Section from './common/Section'
import ServiceList from './services/ServiceList'

const Services = () => {

  const frontEnd = [
    "All that is on the site will be carefully crafted.",
    "Mobile-First is our first principle when it comes to the creation of a website.",
    "The basic hosting and domain will be provided free of charge.",
    "Search Engine Optimization.",
    "We'll protect the site 24 hours a day.",
  ]

  const mobile = [
    "Your app can run on a variety of platforms including iOS and Android.",
    "We make every effort to improve the performance of the application.",
    "Continue to look at operating system modifications or updates to meet application requirements.",
    "You can define continence time to allow us to assist your company more conveniently.",
    "Your satisfaction is my first thing to keep an eye on during the development of functions.",
  ]

  const content =
    <div className='flex flex-col md:flex-row'>
      <ServiceList title="Web Development" contents={frontEnd} className="flex-1 md:mr-2" />
      <ServiceList title="Mobile Development" contents={mobile} className="flex-1 mt-3 md:mt-0 md:ml-2" />
      {/* <ServiceList title="Content creation" className="flex-1" /> */}
    </div>
  return (
    <Section title="Services" desc="What I offer" subContent={content}>
    </Section>
  )
}

export default Services