import React, { useState } from 'react';
import CardsData from '../../Data/CardsData';
import EpisodeItem from '../EpisodeItem';
import './style.css';

const Episode = () => {
  const [visible, setVisible] = useState(3);

  const showMoreEpisodes = () => {
    setVisible((item) => (item += 6));
  };

  return (
    <section className='episodes'>
      <div className='episodes_container'>
        <div className="episodes_top">
          <div className="episodes-top_container_left">
            <h2 className='episodes-h2'>Son Epizodlar</h2>
            <p>Hamımız bir bataqlıqdayıq.Bəzilərimiz ulduzlara baxar.</p>
          </div>
          <div className="episodes_container-top_right">
            <button onClick={() => showMoreEpisodes()} className="episodes_btn">
              Bütün Epizodları Göstər
            </button>
          </div>
        </div>
        <div className="episodes_container-bottom">
          <div className="episodes_container_items">
            {
              CardsData.slice(0, visible).map(({ id, image, description, title }) => {
                return (
                  <div key={id}>
                    <EpisodeItem id={id} image={image} title={title} description={description} />
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Episode;
