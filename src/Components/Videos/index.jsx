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
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="30" viewBox="0 0 48 30" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.55259 3.53093C0 5.71503 0 8.81002 0 15C0 21.19 0 24.285 1.55259 26.4691C2.09673 27.2345 2.76546 27.9033 3.53093 28.4474C5.71503 30 8.81002 30 15 30H33C39.19 30 42.285 30 44.4691 28.4474C45.2345 27.9033 45.9033 27.2345 46.4474 26.4691C48 24.285 48 21.19 48 15C48 8.81002 48 5.71503 46.4474 3.53093C45.9033 2.76546 45.2345 2.09673 44.4691 1.55259C42.285 0 39.19 0 33 0H15C8.81002 0 5.71503 0 3.53093 1.55259C2.76546 2.09673 2.09673 2.76546 1.55259 3.53093ZM20.9499 20.2855L30.3999 14.9013L20.9499 9.51713V20.2855Z" fill="#1AD993" />
                        </svg>
                        <h4 className='youtube_text'>350+ Videolar</h4>
                    </div>


                </div>
                <div className="video_right">
                    <div className='videoline'>
                        <img src={line5} alt="" />
                    </div>

                    <div className="youtube_video_text">
                        <h2 className='yotube_video_title'>2008- ci ildə <br /> <span>YouTube</span> platformasında mən</h2>
                        <p className='video_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare.
                            Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Videos