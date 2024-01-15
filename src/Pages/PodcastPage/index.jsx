import React from 'react'
import Studios from '../../Components/Studios'
import HeroStory from '../../Components/HeroStory'
import Sponsors from '../../Components/Sponsors'

import RecentEpisodes from '../../Components/RecentEpisodes'
import FilterPodcast from '../../Components/FilterAllPodcasts'



const Podcasts = () => {
  return (
    <div>
     
     
     <Studios/>
     <RecentEpisodes/>
     <FilterPodcast/>
     <HeroStory/>
     <Sponsors />
   
    </div>
  )
}

export default Podcasts