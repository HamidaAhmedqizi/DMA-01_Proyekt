import React from 'react'
import { Link } from 'react-router-dom'
import Episode_listen_icon from  '../../Images/Icon1.png'
import Episode_icon from '../../Images/EpisodeIcon2.png'
import './style.css'

const EpisodeItem = ({ image,  description, title}) => {
    return (
        <div className='episode_item_list'>
            <div className='images_episodeitem'>
               <img src={Episode_icon}className='episode_icon'alt="" />
                <Link to='/singlepodcast'> <img src={image} alt="" /></Link>
            </div>
            <div className="episodeitem_text_icon">
                <h3 className='episodeItem_title'>{title}</h3>
                <p className='episodeItem_desc'>{description}</p>
                <div className='episodeitem_listen' >
                <img className='episode_listen' src={Episode_listen_icon} alt="" />
                    <p className='listen_text'> Listen now</p>
                </div>
            </div>
        </div>
    )
}

export default EpisodeItem