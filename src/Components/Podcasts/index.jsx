import React from 'react';
import './style.css';
import Line from '../../Images/Line.png';
import line1 from '../../Images/Line1.png';
import line2 from '../../Images/Line2.png';
import spaeakingMan from '../../Images/speaking_man_photo.png';
import spaeakingWoman from '../../Images/people-woman-relaxation-sitting-7229039.png';
import speakingLines from '../../Images/speaking_lines.png';
import speakingSingleLine from '../../Images/speaking_single_line.png';

const Podcasts1 = () => {
  return (
    <section className='Podcast'>
      <div className='pod_containerPodcasts'>
        <div className="pod_leftContainer">
          <div className='pod_line-images'>
            <img className='pod_Line' src={Line} alt="" />
            <img className='pod_Line1' src={line1} alt="" />
          </div>

          <div className="pod_content">
            <h2 className='pod-h2'>Yaradıcılar üçün podcast</h2>
            <p>
              Hamımız bir bataqkıqdayıq.Bəzilərimiz ulduzlara baxar
            </p>
          </div>

          <div className='pod_line-image'>
            <img className='pod_Line2' src={line2} alt="" />
          </div>
        </div>
        <div className="pod_rightContainer">
          <div className="pod_speaking_images">
            <img className='pod_speakingMan' src={spaeakingMan} alt="" />
            <img className='pod_speakingWoman' src={spaeakingWoman} alt="" />
            <img className='pod_speakingLines' src={speakingLines} alt="" />
            <img className='pod_speakingSingleLine' src={speakingSingleLine} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Podcasts1;
