import React from 'react'
import './style.css'
import images from '../../Images/startup.png'

const Startup = () => {
    return (
        <section className='startup'>
            <div className="startup_container">
                <div className="startup_container_left">
                    <div className="startup_title_desc">
                        <p className='startup_featured'>Featured</p>
                        <h2 className='startup_title'>Should I raise money for my startup, or not?</h2>
                        <p className='startup_desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                    <div className="startup_button">
                        <button className='statrup_btn'>Read Now<svg xmlns="http://www.w3.org/2000/svg" width="23" height="12" viewBox="0 0 23 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.466 0.238643L22.7565 5.42386C23.0812 5.74205 23.0812 6.25794 22.7565 6.57614L17.466 11.7614C17.1413 12.0795 16.615 12.0795 16.2903 11.7614C15.9657 11.4432 15.9657 10.9273 16.2903 10.6091L20.1617 6.81478H0V5.18522H20.1617L16.2903 1.39091C15.9657 1.07272 15.9657 0.556834 16.2903 0.238643C16.615 -0.0795478 17.1413 -0.0795478 17.466 0.238643Z" fill="#503AE7" />
                        </svg></button>
                    </div>
                </div>
                <div className="startup_container_right">
                    <img src={images} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Startup