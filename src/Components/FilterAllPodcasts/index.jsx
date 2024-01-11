import React, { useState } from 'react';
import CardsData from '../../Data/CardsData';
import EpisodeItem from '../EpisodeItem';
import './style.css';

const FilterPodcast = () => {
 
  const [filteredData, setFilteredData] = useState(CardsData);

  const filtercate = (x) => {
    const filterData = CardsData.filter((curElm) => {
      return curElm.category === x;
    });
    setFilteredData(filterData);
  };

  const AllPodcast = () => {
    setFilteredData(CardsData);
  };

  return (
    <section className='episodes'>
      <div className='episodes_container'>
        <div className="episodes_top">
          <div className="episodes-top_container_left">
            <h2 className='episodes-h2'>All Podcast</h2>
          </div>
          <div className="category">
            <button className='category_filter' onClick={AllPodcast}>All Podcast</button>
            <button className='category_filter' onClick={() => filtercate('Business')}>Business</button>
            <button className='category_filter' onClick={() => filtercate('Customers')}>Customers</button>
            <button className='category_filter' onClick={() => filtercate('Startup')}>Startup</button>
          </div>
        </div>
        <div className="episodes_container-bottom">
          <div className="episodes_container_items">
            {filteredData.map(({ id, image, description, title }) => (
              <div key={id}>
                <EpisodeItem id={id} image={image} title={title} description={description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterPodcast;
