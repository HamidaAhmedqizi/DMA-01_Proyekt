import React from 'react'
import { Link } from 'react-router-dom'
import hero_pulse from '../../Images/Pulse.png'
import './style.css'

const HeroStory = () => {
    return (
        <section className='heroStory'>
            <div className="herostory_container">
                
                    <div className="herostory_container_left">
                        <div className='hero_container_text'>
                        <h1 className='hero_container_title'>Öz hekayənin qəhrəmanı olun</h1>
                        <p className='hero_container_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare. 
                        <span>Sit volutpat, volutpat
                            ut netus malesuada enim penatibus non aliquet.</span></p>
                        <Link to='/contact'>
                            <button className="story_btn">
                                Bizimlə Əlaqə Saxlayın
                            </button>
                        </Link>
                        </div>
                        
                    </div>
                    <div className="herostory_container_right">
                        <div className="story_image" >
                            <img className='image_pulse' src={hero_pulse} alt="" />
                        </div>
                    </div>
               

            </div>
        </section>
    )
}

export default HeroStory
