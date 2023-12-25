import React from 'react'

import images1 from '../../Images/Apple Podcast.png'
import images2 from '../../Images/Spotify.png'
import images3 from '../../Images/Sound Cloud.png'
import images4 from '../../Images/Google Podcast.png'
import './style.css'


const Brands = () => {
    const images=[images1,images2,images3, images4]
  return (
    <div className='containerBrands'>
           <div className='text'>Podcast Available On</div>
           <div className="Image">
           {
            images.map((image,index)=>{
              return <article key={index}>
           <img src={image} alt={`Gallery Image ${index}`} />
              </article>
            })
          }
           </div>
    </div>
  )
}

export default Brands