import React from 'react'
import Logo1 from '../../Images/Logo1.png'
import Logo2 from '../../Images/Logo2.png'
import Logo3 from '../../Images/Logo3.png'
import Logo4 from '../../Images/Logo4.png'
import Logo5 from '../../Images/Logo5.png'
import './style.css'

const Sponsors = () => {

  const Sponsors=[Logo1,Logo2,Logo3,Logo4,Logo5]
  return (
    <section className='sponsors'>
      <div className="sponsors_container">
        <div className="sponsors_title">
          <h2>Our sponsors</h2>
        </div>
      <div className="sponsors_logos">
      {
            Sponsors.map((image,index)=>{
              return <article key={index}>
<img src={image} alt={`Gallery Image ${index}`} />
              </article>
            })
          }
      </div>
      </div>
    </section>
  )
}

export default Sponsors