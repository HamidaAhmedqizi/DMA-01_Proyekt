import React from 'react';
import './style.css';
import aboutIcon from '../../Images/AboutIcon.png';

const Finesweet = () => {
  return (
    <section className='finesweet'>
      <div className="finesweet_container">
        <div className="finesweet_cpntainer_left">
          <h1 className='finesweet_title'>Haqqında Finesweet Podcast</h1>
          <p className='finesweet_desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          <button className='finesweet_btn'>Abunə Ol!</button>
        </div>
        <div className="finesweet_cpntainer_right">
          <img className='finesweet_img' src={aboutIcon} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Finesweet;
