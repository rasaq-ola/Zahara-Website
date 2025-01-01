import React from 'react'
import Opening from '../Components/Opening/Opening'
import Navbar from '../Components/Navbar/Navbar';
import WhatWeDo from '../Components/WhatWeDo/WhatWeDo';
import Mission from '../Components/Mission/Mission';
import Team from '../Components/Team/Team';

const AboutUs = () => {
  return (
    <div>
      <Opening/>
      <WhatWeDo/>
      <Mission/>
      <Team/>
    </div>
  )
}

export default AboutUs;