import React, { useState } from 'react'
import CardsData from '../../Data/CardsData'
import EpisodeItem from '../EpisodeItem'
import './style.css'

const Episode = () => {
  const [visible,setVisible]=useState(3);
  const showMoreMeals = () => {
   
    setVisible((item) => (item += 6));
  };
  return (
    <section className='episodes'>
      <div className='episodes_container'>
        <div className="episodes_top">
          <div className="episodes-top_container_left">
            <h2 className='episodes-h2'>Recent Episodes</h2>
            <p>Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black.
            </p>
          </div>
          <div className="episodes_container-top_right">
            <button onClick={() => showMoreMeals()} className="episodes_btn">
              See All Episiodes
            </button>
          </div>
        </div>
        <div className="episodes_container-bottom">

          <div className="episodes_container_items">
            <div className="episodes_container-bottom">
              

                {
                 CardsData.slice(0, visible).map(({id,image,  description, title})=>{
                    return (
                      <div key={id}>
                       <EpisodeItem id={id} image={image} title={title} description={description}/>
                      </div>
                    )
                  })
                }

              


            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Episode