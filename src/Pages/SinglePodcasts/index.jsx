import React from 'react'
import Author from '../../Components/Author'
import Makers from '../../Components/Makers'
import Sponsors from '../../Components/Sponsors'
import Footers from '../../Components/Footers'
import CopyRight from '../../Components/Copyright'
import RecentEpisodes from '../../Components/RecentEpisodes'



const SinglePodcasts = () => {
  return (
    <div>
      <Makers/>
       <Author/>
       <RecentEpisodes/>
       <Sponsors/>
       <Footers />
      <CopyRight />
       

    </div>
  )
}

export default SinglePodcasts