import React from 'react'
import Hero from '../../Components/Hero'
import BigCards from '../../Components/BigCards'
import Vlogger from '../../Components/Vlogger'
import Dream from '../../Components/Dream'
import Brands from '../../Components/Brands'

const Host = () => {
  return (
    <div>
      <Brands/>
      <Dream/>
      <Vlogger/>
      <BigCards />
      <Hero />

    </div>
  )
}

export default Host