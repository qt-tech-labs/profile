import React from 'react'
import Section from './common/Section'
import PortfolioCard from './portfolio/PortfolioCard'
import food from '../assets/food.jpeg'
import bitcoin from '../assets/bitcoin.jpeg'
import real from '../assets/real.png'
import reco from '../assets/reco.png'
import nltk from '../assets/nltk.png'
import shop from '../assets/shop.jpeg'

const Portfolio = () => {

  const ports = [
    {
      title: "Food delivery by React Native",
      github: "https://github.com/qt-tech-labs/deliverypoo",
      image: food
    },
    {
      title: "Bitcoin trade",
      github: "https://github.com/qt-tech-labs/freebc-frontend",
      image: bitcoin
    },
    {
      title: "Real estate by Swift",
      github: "https://github.com/qt-tech-labs/realEstate",
      image: real
    },
    {
      title: "Shopping web by MVC .NET",
      github: "https://github.com/qt-tech-labs/wweb",
      image: shop
    },
    {
      title: "Recommendation system by C#",
      github: "https://github.com/qt-tech-labs/recomendation",
      image: reco
    },
    {
      title: "Natural Language Processing by Python",
      github: "https://github.com/qt-tech-labs/auto-generate-tiktok",
      image: nltk
    }
  ]

  const content =
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {
        ports.map(item => {
          return <PortfolioCard title={item.title} github={item.github} image={item.image} />
        })
      }
    </div>
  return (
    <Section title="Portfolio" desc="What did I do" subContent={content} />
  )
}

export default Portfolio