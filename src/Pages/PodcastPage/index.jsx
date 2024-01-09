import React from 'react'
import Studios from '../../Components/Studios'
import HeroStory from '../../Components/HeroStory'
import Sponsors from '../../Components/Sponsors'
import CopyRight from '../../Components/Copyright'
import Footers from '../../Components/Footers'
import Author from '../../Components/Author'


const Podcasts = () => {
  return (
    <div>
      <Author/>
      <HeroStory/>
     <Studios/>
     <Sponsors />
     <Footers />
      <CopyRight />
    </div>
  )
}

export default Podcasts