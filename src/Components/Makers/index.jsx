import React from 'react'
import './style.css'
import images1 from '../../Images/Apple Podcast.png'
import images2 from '../../Images/Google Podcast.png'
import images3 from '../../Images/Sound Cloud.png'
import images4 from '../../Images/Spotify.png'

const Makers = () => {
    return (
        <section className='makers'>
            <div className="makers_container">
                <div className="makers_container_left">
                    <div className="maker_container_text">
                        <h2 className='makers-title'>A podcast for makers and entrepreneurs</h2>
                        <p className='makers_desc'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                            <br /> <br />
                            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
                            omnis voluptas assumenda est, omnis dolor repellendus.
                        </p>
                    </div>
                    <div className="maker_container_text">
                        <h3 className='makers-title'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black</h3>
                        <p className='makers_desc'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et
                            quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
                            id est laborum et dolorum fuga.</p>
                        <ul>
                            <li className='makers_li'>we both celebrate and challenge</li>
                            <li className='makers_li'>the culture around us as we orient our lives around Jesus</li>
                            <li className='makers_li'>we want to help you take that next step</li>
                        </ul>
                        <p className='makers_desc'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                            similique sunt in culpa qui officia deserunt mollitia animi,
                            id est laborum et dolorum fuga.</p>
                    </div>
                </div>
                <div className="makers_container_right">
                    <h3 className='makers-title_right'>Listen on</h3>
                    <img src={images1} alt="" />
                    <img src={images2} alt="" />
                    <img src={images3} alt="" />
                    <img src={images4} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Makers