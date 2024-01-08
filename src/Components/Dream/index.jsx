import React from 'react'
import purpleLine from '../../Images/Line1.png'
import dream_photo_web from '../../Images/dream.png'
import dream_wawe from '../../Images/Dream_Wave .png'
import './style.css'

const Dream = () => {
  return (
   <section className='dream'>
<div className="dream_container">
    <div className="dream_container_left">
        <h2 className='dream_container_title'>A small story about a big dream  —  </h2>
        <p className='dream_container_desc'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon</p>
        <p className='dream_container_text'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and </p>
        <div className='dream_purpleLine'>
        <img src={purpleLine} alt="" />
        </div>
    </div>
    <div className="dream_container_right">
       <img className='man_speaking' src={dream_photo_web} alt="" />
       <div className='dream_wawe'>
       <img src={dream_wawe} alt="" />
       </div>
    </div>
</div>

   </section>
  )
}

export default Dream