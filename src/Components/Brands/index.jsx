import React from 'react'
import images from '../../Images/Vector.jpg'

const Brands = () => {
  return (
    <div className='containerBrands'>
           <div className='text'>Podcast Available On</div>
           <div className="Apple">
            <img src={images} alt="" />
           </div>
    </div>
  )
}

export default Brands