import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Socials from './components/Socials';
import News from './components/News';
import Loading from './components/Loading';
import IIndex from './IIndex';
import { SpeedInsights } from '@vercel/speed-insights/react';

function Index() {
     const [showLoading, setShowLoading] = useState(true);

     useEffect(() => {
          const timeoutId = setTimeout(() => {
               setShowLoading(false);
          }, 3000);

          return () => clearTimeout(timeoutId);
     }, []);

     return (
          // <div className='px-6  lg:px-40'>
          //      {showLoading ? (
          //           <Loading />
          //      ) : (
          //           <>
          //                <NavBar />
          //                <Hero />
          //                <CaseStudies />
          //                <Skills />
          //                <Socials />
          //                <Footer />
          //           </>
          //      )}
          // </div>
          <>
               <SpeedInsights />
               <IIndex />
          </>
     );
}

export default Index;
