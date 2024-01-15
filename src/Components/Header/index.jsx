import React from 'react';
import images from '../../Images/Audio track.jpg';
import './style.css';

const Header = () => {
  return (
    <div className='containerHeader'>
      <div className="leftSide">
        <h1>Öz hekayənin qəhrəmanı olun</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat.</p>
        <div className='Subscribe_header'>
          <input className='header_email' type="email" placeholder='Sizin Email İdinizə daxil olun' name="" id="" />
          <button className='header_button'>Abunə ol</button>
        </div>
      </div>
      <div className="rigtSide">
        <img src={images} alt="" />
      </div>
    </div>
  );
};

export default Header;
