import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Socials from './components/Socials';
function Index() {
     return (
          <div className='px-6  lg:px-40'>
               
               <NavBar />
               <Hero />
               <CaseStudies />
               <Skills />
               <Socials />
               <Footer />
          </div>
     )
}

export default Index
