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
        <h2 className='dream_container_title'>The Courage to be Disliked kitabından kiçik hissə</h2>
        <p className='dream_container_desc'>Kitab insanlara "sevilmə və qəbullanma arzusunun" ruhi azadlığımıza zidd olduğunu,hədəfsiz olub anın gətirdiyi yönə getməyin əsl xoşbəxtlik gətirdiyini </p>
        <p className='dream_container_text'> Xoşbəxtliyə ddımda  nail olacağını "özünü  qəbul etmə","insanları yoldaş kimi görmək","insanlara faydalı olmaq" və başqa məsəlləri gənc və filosof arasında gedən dialoqla izah edir. </p>
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