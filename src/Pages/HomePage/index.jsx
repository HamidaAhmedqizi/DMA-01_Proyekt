import React from 'react'
import Header from '../../Components/Header'
import Footers from '../../Components/Footers'
import Brands from '../../Components/Brands'
import Podcasts1 from '../../Components/Podcasts'
import Videos from '../../Components/Videos'
import Subscribe from '../../Components/Subscribe'
import Sponsors from '../../Components/Sponsors'
import CopyRight from '../../Components/Copyright'
import CommentsC from '../../Components/CommentsC'
import Episode from '../../Components/Episode'
import Read from '../../Components/Read'




const HomePage = () => {
  return (
    <div>
      <Header />
      <Brands />
      <Podcasts1 />
      <Videos />
      <Episode/>
      <CommentsC />
      <Subscribe />
      <Read/>
      <Sponsors />
     
      <Footers />
      <CopyRight />







    </div>
  )
}

export default HomePage
