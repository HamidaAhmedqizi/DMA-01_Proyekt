import React from 'react';
import './style.css';


const Podcasts1 = () => {
    return (
        <div className='containerPodcasts'> {/* Değiştirilen kısım: className='containerPodcasts' */}
            <div className="leftContainer">
                <div className="content">
                    <h2>A podcast for makers and entrepreneurs</h2>
                    <body>
                        Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                    </body>
                </div>
            </div>
            <div className="rightContainer">
               <div className="image">
                <img src="" alt="" />
               </div>
            </div>
        </div>
    );
}

export default Podcasts1;
