import React from 'react';
import icon1 from '../../Images/Icon bgCards1.png';
import icon2 from '../../Images/Icon bgCards2.png';
import icon3 from '../../Images/Icon bgCards3.png';
import icon4 from '../../Images/Icon bgCards4.png';

import './style.css';

const BigCards = () => {
    return (
        <section className='bigcards'>
            <div className='bigcards_container'>
                <div className="bigcards_container_card">
                    <img src={icon1} alt="" />
                    <div className='bigcards_number_text'>
                        <h2 className='bigcards-number'> 500+</h2>
                        <h3 className='bigcards_text'>Podcastlar</h3>
                    </div>
                </div>
                <div className="bigcards_container_card">
                    <img src={icon2} alt="" />
                    <div className='bigcards_number_text'>
                        <h2 className='bigcards-number'>24M</h2>
                        <h3 className='bigcards_text' >İzləmələr</h3>
                    </div>
                </div>
                <div className="bigcards_container_card">
                    <img src={icon3} alt="" />
                    <div className='bigcards_number_text'>
                        <h2 className='bigcards-number'>600K</h2>
                        <h3  className='bigcards_text'>Abunələr</h3>
                    </div>
                </div>
                <div className="bigcards_container_card">
                    <img src={icon2} alt="" />
                    <div className='bigcards_number_text'>
                        <h2 className='bigcards-number'>24M</h2>
                        <h3  className='bigcards_text'>İzləmələr</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BigCards;
