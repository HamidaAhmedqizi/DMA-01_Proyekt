import React from 'react';
import './style.css';
import Line from '../../Images/Line.png';
import line1 from '../../Images/Line1.png';
import line2 from '../../Images/Line2.png';
import spaeakingMan from '../../Images/speaking_man_photo.png'
import spaeakingWoman from '../../Images/people-woman-relaxation-sitting-7229039.png'
import speakingLines from '../../Images/speaking_lines.png'
import speakingSingleLine from '../../Images/speaking_single_line.png'



const Podcasts1 = () => {
    return ( 
        <section className='Podcast'>
            <div className='containerPodcasts'> {/* Değiştirilen kısım: className='containerPodcasts' */}
                <div className="leftContainer">
                    <img className='Line' src={Line} alt="" />
                    <img className='Line1' src={line1} alt="" />
                    <img className='Line2' src={line2} alt="" />
                    <div className="content">
                        <h2>A podcast for makers and entrepreneurs</h2>
                        <body>
                            Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                        </body>
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="speaaking_images">
                       <img className='speakingMan' src={spaeakingMan} alt="" />
                       <img className='speakingWoman'  src={spaeakingWoman} alt="" />
                       <img className='speakingLines'  src={speakingLines} alt="" />
                       <img className='speakingSingleLine' src={speakingSingleLine} alt="" />
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Podcasts1;
