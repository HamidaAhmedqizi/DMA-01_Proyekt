import React from 'react'
import { Link } from 'react-router-dom'
import Episode_listen_icon from  '../../Images/Icon1.png'
import Episode_icon from '../../Images/EpisodeIcon2.png'

const EpisodeItem = ({ image,  description, title}) => {
    return (
        <div className='episode_data_list'>
            <div className='images_item'>
               <img src={Episode_icon} alt="" />
                <Link> <img src={image} alt="" /></Link>
            </div>
            <div className="episode_data_text_icon">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='episode_listen' >
                <img src={Episode_listen_icon} alt="" />
                    <p className='listen text'> Listen now</p>
                </div>
            </div>
        </div>
    )
}

export default EpisodeItem