import './index.scss';

import React from 'react';

import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import MainBanner from './components/MainBanner/MainBanner';
import BlogSection from './components/BlogSection/BlogSection';
import Recommendations from './components/Recommendations/Recommendations';

import StepsSection from './components/StepsSection/StepsSection';
import Navbar from './components/Navbar/NavBar';
import Footer from './components/footer/Footer';
import  Contact from './components/contact/Contact';


function FreelancerHome() {

    return (
      <div className="freelancer-home-container">
        <Navbar/>
        <MainBanner />

        <div className="gradient-background">
          <div className="content-wrapper">
            <Recommendations />

            <BlogSection />

            <PortfolioSection />

            <StepsSection />

           
             <Contact />
            <Footer/>
          </div>
        </div>

      </div>
    )
}


export default React.memo(FreelancerHome);