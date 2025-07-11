import React from 'react'
import Navigation from '../Components/Index/Navigation'
import Herosection from '../Components/Index/Herosection'
import AboutMe from '../Components/Index/AboutMe'
import Background from '../Components/Index/Background'
import AdditionalInfo from '../Components/Index/AdditionalInfo'
import Projects from '../Components/Index/Projects'
import Illustrations from '../Components/Index/Illustrations'
import Contact from '../Components/Index/Contact'

const Index = () => {
  return (
    <div className='w-full font-monto text-gray-900'>
        <Navigation />
        <Herosection />
        <AboutMe />
        <Background />
        <Projects />
        <Contact />
    </div>
  )
}

export default Index