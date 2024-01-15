import React from 'react';
import green_border from '../../Images/Green Border.png';
import './style.css';

const Studios = () => {
    return (
        <section className='studios'>
            <div className="studios_container">
                <div className="studios_bg">
                    <img src={green_border} alt="" />
                    <div className="studios_blue">
                        <div className="studios_text_content">
                            <p className='studios_desc'>Xüsusi</p>
                            <h2 className='studios_title'>UX Tədqiqatına Əsaslanan Təlim Mühiti Üzərində Bir Təhlil</h2>
                            <p className='studios_desc_'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam magni laboriosam mollitia quod et suscipit neque modi. Autem repellat tenetur, maiores ut laboriosam veniam consequatur, nisi mollitia non ad molestias.</p>
                        </div>
                        <div className="studios_icon_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <rect width="32" height="32" rx="16" fill="#1AD993" />
                                <path d="M21.3335 16L12.4446 21.6452L12.4446 10.3548L21.3335 16Z" fill="white" />
                            </svg>
                            <button className='studios_btn'>İndi dinləyin</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Studios;
