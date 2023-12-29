import React from 'react'
import Logo_footer from '../../Images/footer.svg'
import { Link, NavLink } from 'react-router-dom'
import './style.css'
import myRoutes from '../MyRoutes'
import images1 from '../../Images/Podcast Available On.png';
import images2 from '../../Images/Apple Podcast.png';
import images3 from '../../Images/Spotify.png';
import images4 from '../../Images/Sound Cloud.png';
import images5 from '../../Images/Google Podcast.png';

const index = () => {
  const images = [images1, images2, images3, images4, images5];
  return (
    <section className='footer'>
      <div className="footer_container">
        <div className="footer_container_item">
          <div className="logo">
            <Link to='/'>
              <img src={Logo_footer} alt="" />
            </Link>
            <div className="footer_title_pages">
              <div className="footer_title">
                <h4>Pages</h4>
              </div>
              <div className="footer_pages">
                {
                  myRoutes.map(({ id, path, title }) => {
                    return (<NavLink key={id} to={path}>{title}</NavLink>
                    )
                  })
                }

              </div>
            </div>
            <div className="foot_container_item">
              <div className='footer_title_pages' >
                <div className="footer_title">
                  <h4>Reach Us</h4>
                </div>
                <div className="footer_pages">
                  {
                    myRoutes
                      .filter((_, index) => index === 2 || index === 5)
                      .map(({ id, path, title }) => (
                        <NavLink key={id} to={path}>
                          {title}
                        </NavLink>
                      ))
                  }
                </div>
                
              </div>

              <div className="footer_title_pages">
                <div className="footer_title">
                  <h4>Subscribe</h4>
                </div>
                <div className="footer_pages">
                  {images.map((image, index) => (

                    <div key={index}>
                      <article>
                        <img src={image} alt={` ${index}`} />
                      </article>
                    </div>

                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default index