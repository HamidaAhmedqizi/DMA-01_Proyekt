import React from 'react'
import Author from '../../Components/Author'
import Makers from '../../Components/Makers'
import Sponsors from '../../Components/Sponsors'
import Footers from '../../Components/Footers'
import CopyRight from '../../Components/Copyright'
import RecentEpisodes from '../../Components/RecentEpisodes'
// import { useParams } from 'react-router-dom'
// import InCard from '../../Components/InCard'



const SinglePodcasts = () => {

  return (
    <div>
      {/* <InCard/> */}
      <Makers/>
       <Author/>
       <RecentEpisodes/>
       <Sponsors/>
      
       

    </div>
  )
}

export default SinglePodcasts