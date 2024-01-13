import React from 'react'
import CardsData from '../../Data/CardsData'
import EpisodeItem from '../EpisodeItem'
import './style.css'

const RecentEpisodes = () => {
 
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
          
        </div>
        <div className="episodes_container-bottom">

          <div className="episodes_container_items">
            
              

                {
                 CardsData .slice(0,3).map(({id,image,  description, title})=>{
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

  
    </section>
  )
}

export default RecentEpisodes