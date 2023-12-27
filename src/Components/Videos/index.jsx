import React from 'react'
import './style.css'
import manWebPhoto from '../../Images/man-in-beige-suit-jacket-sitting-on-chair-6878173.png'
import youtube_icon from '../../Images/Youtube icon.png'
import line5 from '../../Images/Line5.png'

const Videos = () => {
    return (
        <section className='videos'>
            <div className="video_container">
                <div className="video_left">
                    <div className="video_image">
                        <img src={manWebPhoto} alt="" />
                    </div>
                    <div className="video_youtube">
                        <img src={youtube_icon} alt="" />
                        <h4>365+ Videos</h4>
                    </div>


                </div>
                <div className="video-right">
                    <div>
                    <img src={line5} alt="" />
                    </div>
                    
                    <div className="video-text">
                        <h2>My origins on YouTube in 2008</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare.
                             Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Videos