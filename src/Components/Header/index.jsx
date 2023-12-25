import React from 'react'
import images from '../../Images/Audio track.jpg'
import './style.css'

const Header = () => {
  return (
    <div className='containerHeader'>
      <div className="leftSide">
        <h1>Become The Hero Of Your Own Story</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat.</p>
        <div className='Subscribe'>
          <input type="email" name="" id="" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="rigtSide">
        <img src={images}alt="" />
      </div>

    </div>
  )
}

export default Header