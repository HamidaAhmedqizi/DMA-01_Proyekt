import React from 'react'
import Hero from '../../Components/Hero'
import BigCards from '../../Components/BigCards'
import Vlogger from '../../Components/Vlogger'
import Dream from '../../Components/Dream'
import Brands from '../../Components/Brands'
import Welcome from '../../Components/Welcome'
import Subscribe from '../../Components/Subscribe'

const Host = () => {
  return (
    <div>
      <Welcome/>
      <Brands/>
      <Dream/>
      <Vlogger/>
      <BigCards />
      <Hero />
      <Subscribe/>

    </div>
  )
}

export default Host