import React from 'react';
import read_photo from '../../Images/Mask Group.png';
import readData from '../../Data/ReadData';
import ReadItem from '../ReadItem/index';
import './style.css'

const Read = () => {
  return (
    <section className='read'>
      <div className="read_container">
        <div className="read_left_card">
          <div className="read_left_head">
            <h3 className='card_title'>Read our articles & news</h3>
            <button className='read_button'>See More</button>
          </div>
          <div className="read_card_left_img">
            <img src={read_photo} alt="" />
          </div>
        </div>
        <div className="read_container_right_items">
          <div className="read_container_items">
            
              {readData.map(({ id, image, text, title }) => {
              return(
              <div>
                <ReadItem key={id} image={image} text={text} title={title} />
              </div>
              )
              
              })}
           

          </div>
        </div>
      </div>
    </section>
  );
};

export default Read;
