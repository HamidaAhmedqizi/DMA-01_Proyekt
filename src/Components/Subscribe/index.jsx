import React from 'react'
import '../Subscribe/Sub.css';
import image from '../../Images/Icon.png'

const Subscribe = () => {
    return (
        <section className='Subscribe'>
            <div className="Subscribe_container">
                <div className="SubscribeCenter">
                    <h2>Receive new episodes in your inbox.</h2>
                    <div className="input-button">
                        <input type="text" placeholder='enter your Email' />
                        <button className='button'>Subscribe'</button>
                    </div>
                </div>
                <div className="SubscribeRight">
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Subscribe