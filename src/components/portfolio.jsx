import React from 'react'
import Section from './common/Section'
import PortfolioCard from './portfolio/PortfolioCard'

const Portfolio = () => {
    const content = 
        <div className='grid grid-cols-3 gap-4'>
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
  return (
    <Section title="Portfolio" desc="What did I do" subContent={content}/>
  )
}

export default Portfolio