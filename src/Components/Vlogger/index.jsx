import React from 'react'
import './style.css'
import vloger_line1 from '../../Images/Line2.png'
import vloger_line2 from '../../Images/Line.png'
import vloger_line3 from '../../Images/Line1.png'
const Vlogger = () => {
  return (
    <section className='Vlogger'>
      <div className="vlogger_container">
        {/* <div className='vlogger_lines'>
          <img src={vloger_line1} alt="" />
          <div className='vlogger_line'>
            <img src={vloger_line2} alt="" />
            <img src={vloger_line3} alt="" />
          </div>
        </div> */}
        <div className="vlogger_container_left">
          <h2 className='vlogger_title'>2008- ci ildə
YouTube platformasında mən</h2>
          <p className='vlogger_text'>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem eget condimentum enim
            libero ultricies amet odio fringilla.
            Ut nibh morbi augue porta aliquet commodo.
            Fermentum auctor lacus eget in ut integer viverra sed.
            Penatibus tortor consequat, habitasse non nisl
            <br />
            <br />
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mus cras lacus tellus
            morbi viverra suspendisse ornare. Sit volutpat,
            volutpat ut netus malesuada enim penatibus
            non aliquet.
          </p>
        </div>
        <div className="vlogger_container_right">
          <h2 className='vlogger_title'>Texnoloji jurnalistindən, Vlogger və YouTuber-ə</h2>
          <p className='vlogger_text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mus cras lacus tellus morbi viverra suspendisse ornare.
            Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem eget condimentum enim libero ultricies amet odio fringilla.
            Ut nibh morbi augue porta aliquet commodo.
            Fermentum auctor lacus eget in ut integer viverra sed.
            Penatibus tortor consequat, habitasse non nisl.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem eget condimentum enim libero ultricies ame\
          </p>
        </div>
      </div>
    </section>
  )
}

export default Vlogger