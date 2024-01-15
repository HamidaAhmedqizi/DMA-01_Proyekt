import React from 'react'
import { Link } from 'react-router-dom'
import Pulse from '../../Images/Pulse.png'
import './style.css'

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero_container">
                <div className="hero_container_left">
                    <h1>Öz hekayənin qəhrəmanı ol</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus
                        tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.</p>
                    <Link to='/contact'>
                        <button className='hero_button'>Bizimlə əlaqəyə keç</button>
                    </Link>
                </div>
                <div className="hero_container_right">
                    <div className="hero_image">
                        <img src={Pulse} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero