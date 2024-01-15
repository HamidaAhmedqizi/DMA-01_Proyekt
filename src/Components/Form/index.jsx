import React from 'react'
import images1 from '../../Images/Apple Podcast.png'
import images2 from '../../Images/Sound Cloud.png'
import images3 from '../../Images/Google Podcast.png'
import images4 from '../../Images/Spotify.png'
import images5 from '../../Images/Lines.png'
import './style.css'

const Form = () => {
    return (
        <section className='Form'>
            <div className="form_container">
                <div className="form_container_left">
                    <div className="form_title_cont">
                        <h3 className='form_title'>Bizimlə Əlaqə</h3>
                        <h2 className='form_cont_h2'>Əməkdaşlıq etmək marağınız var? Zəhmət olmasa aşağıdakı formu doldurun.</h2>
                    </div>
                    <div className="form_cont">
                        <form>
                            <div className='form_inputs'>
                                <input type="text" placeholder='Adınız Soyadınız' />
                                <input type="email" placeholder='E-poçt Ünvanınız' />
                                <input type="text" placeholder='Sorğu ilə bağlı' />
                                <textarea placeholder='Mesajınız'></textarea>
                            </div>
                        </form>
                    </div>
                    <button className='form_btn'>İndi Əlaqə saxlayın</button>
                </div>
                <div className="form_container_right">
                    <div className="form_right_title">
                        <h3>Abunə olun</h3>
                    </div>
                    <div className="form_images">
                        <div className="form_images_item">
                            <img src={images1} alt="" />
                            <img src={images2} alt="" />
                        </div>
                        <div className="form_images_item1">
                            <img src={images3} alt="" />
                            <img src={images4} alt="" />
                        </div>
                    </div>
                    <div className="form_socials">
                        <h3 className='form_socials_title'>Sosial Şəbəkələr</h3>
                        <div className="form_socials_icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_759_1835)">
                                    <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="#503AE7" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_759_1835">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_759_1833)">
                                    <path d="M6.73345 19.2658C14.8084 19.2658 19.2263 12.5742 19.2263 6.77296C19.2263 6.58484 19.2221 6.39254 19.2138 6.20442C20.0732 5.58291 20.8148 4.81308 21.4039 3.9311C20.6035 4.28721 19.7537 4.51978 18.8835 4.62087C19.7997 4.07166 20.4858 3.20887 20.8144 2.19245C19.9525 2.70328 19.0098 3.06363 18.0269 3.25804C17.3647 2.55435 16.489 2.08842 15.5354 1.93229C14.5817 1.77616 13.6032 1.93853 12.7511 2.3943C11.899 2.85006 11.2208 3.57384 10.8213 4.45372C10.4218 5.3336 10.3233 6.32059 10.541 7.26208C8.79566 7.17449 7.0882 6.7211 5.52932 5.93129C3.97045 5.14148 2.59495 4.03289 1.492 2.67738C0.931426 3.64388 0.759889 4.78756 1.01225 5.87599C1.26462 6.96442 1.92195 7.91592 2.85065 8.53711C2.15343 8.51498 1.4715 8.32726 0.861172 7.98947V8.04382C0.860548 9.05809 1.21119 10.0413 1.8535 10.8262C2.4958 11.6112 3.39013 12.1495 4.38445 12.3497C3.7386 12.5264 3.06074 12.5521 2.40334 12.4249C2.68392 13.2972 3.22982 14.0601 3.96487 14.6072C4.69991 15.1543 5.58742 15.4583 6.50352 15.4767C4.94824 16.6983 3.02702 17.361 1.04929 17.3579C0.698558 17.3573 0.348169 17.3358 0 17.2935C2.00916 18.5825 4.34636 19.2671 6.73345 19.2658Z" fill="#503AE7" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_759_1833">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_759_1831)">
                                    <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="#503AE7" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_759_1831">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className='contact_image'>
                        <img  className='contact_image_end' src={images5} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form
