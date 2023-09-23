import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies';
import Skills from './components/Socials';
import Footer from './components/Footer';
import Socials from './components/Skills';
function Index() {
     return (
          <div className='px-6 md:px-40'>
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
