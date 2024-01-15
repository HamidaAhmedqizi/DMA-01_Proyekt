import React from 'react'
import './style.css'
import mic_men from '../../Images/mic_men.png'
import line_purple from '../../Images/Line_purple.png'
import line_green from '../../Images/Line_green.png'
import bigLine from '../../Images/BigLine.png'

const Welcome = () => {
    return (
        <section className='welcome'>
            <div className='welcome_container'>
                <div className="welcome_container_left">
                    <div className="welcome_images">
                        <img src={mic_men} alt="" />
                        <img className='line_purple' src={line_purple} alt="" />
                        <img className='line_green' src={line_green} alt="" />
                    </div>
                </div>
                <div className="welcome_container_right">
                    <div className="welcome_text_content">
                        <p className='welcome_blue-text'>Təqdimatçı Haqqında</p>
                        <h2 className='welcone_blue_title'>Salam, mən Andrew Jonson və mənim Podcast saytıma  xoş gəlmisiniz</h2>
                        <p className='welcome_blue-desc'>Podcastlar genelliklə dinləyicilər ilə daha yaxın və şəxsi əlaqə yaratmağa kömək edir. Mütəxəssislər və müstəqil şəxslər podcastlar aracılığı ilə öz biliklərini paylaşaraq dinləyicilərə qıymətli məlumatlar vermək imkanına sahib olurlar.</p>
                    </div>
                    <div className="welcome_btn">
                        <button>Daha Çox Məlumat</button>
                    </div>
                    <div className='bigline'>
                        <img src={bigLine} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome
