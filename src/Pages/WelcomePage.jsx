import React from 'react'
import Welcome from '../Components/Welcome/Welcome';
import Services from '../Components/Services/Services';
import Assistant from '../Components/Assistant/Assistant';
import Info from '../Components/Info/Info';
import Features from '../Components/Features/Features';
import Community from '../Components/Community/Community';

const WelcomePage = () => {
  return (
    <div>
      <Welcome/>
      <Services/>
      <Assistant/>
      <Info/>
      <Features/>
      <Community/>
    </div>
  )
}

export default WelcomePage;