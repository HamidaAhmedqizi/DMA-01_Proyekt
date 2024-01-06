import React from 'react'
import CardsData from '../../Data/CardsData'
import EpisodeItem from '../EpisodeItem'

const Episode = () => {
  return (
    <section className='episodes'>
      <div className='episodes_container'>
        <div className="episodes_top">
          <div className="episodes-top_container_left">
            <h2 className='episodes-h2'>What our listeners say</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mus cras lacus tellus morbi viverra
              suspendisse ornare. Sit volutpat, volutpat ut
              netus malesuada enim penatibus non aliquet.y
            </p>
          </div>

        </div>
        <div className="episodess_container-bottom">

          <div className="episodes_container_items">
            <div className="episodes_container-bottom">
              

                {
                 CardsData.map(({id,image,  description, title})=>{
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