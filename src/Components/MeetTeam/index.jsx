import React from 'react'
import MeetCard from '../../Data/MeetcardData'
import MeetItem from '../MeetItem'
import './style.css'

const MeetTeam = () => {
    return (
        <section className='meetour'>
            <div className="meetour_countainer">
                <div className="meetour_top">
                    <h2 className='meetour_title'>Bizim Komanda </h2>
                </div>
                <div className="meet__center">
                    <div className="meet_items">
                        {
                            MeetCard.map(({ id, image, name, job }) => {
                                return (
                                    <div key={id}>
                                        <MeetItem id={id} image={image} name={name} job={job} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
               
            </div>

        </section>
    )
}

export default MeetTeam