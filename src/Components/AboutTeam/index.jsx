import React from 'react'
import './style.css'
import teamimage from '../../Images/aboutteam.png'

const AboutTeam = () => {
    return (
        <section className='AboutTeam'>
            <div className='aboutteam_container'>
                <div className="aboutteamcenter">
                    <h2 className='aboutteam_title'>A few words about our team</h2>
                    <img src={teamimage} alt="" />
                    <div className='aboutteam_desc'>
                        <p className='about_team_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo.
                             Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat, habitasse non nisl.</p>
                        <p className='about_team_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare.
                             Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTeam