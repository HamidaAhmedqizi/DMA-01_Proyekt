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
                        <p className='welcome_blue-text'>About The Host</p>
                        <h2 className='welcone_blue_title'>Hey there, I’m Andrew Jonson and welcome to my Podcast</h2>
                        <p className='welcome_blue-desc'>Apparently we had reached a great height in the atmosphere,
                            for the sky was a dead black, and the stars had ceased to twinkle. </p>
                    </div>
                    <div className="welcome_btn">
                        <button>Know More</button>
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