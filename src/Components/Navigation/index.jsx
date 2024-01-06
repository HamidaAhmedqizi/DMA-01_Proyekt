import React from 'react'
import myRoutes from '../MyRoutes'
import { NavLink } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import './style.css'


const Navigation = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src="./Logo.svg" alt="" />
                </div>
                <div className="nav-social-cont">
                    <nav>
                        {
                            myRoutes.map(({ id, path, title }) => {
                                return (
                                    <NavLink key={id} to={path}>{title}</NavLink>
                                )


                            })
                        }
                    </nav>
                    <div className="nav-soicals">
                        <a href="https://linkedin.com/" target='_blank' rel='noreferrer noopener'><FaLinkedinIn /></a>
                        <a href="https://facebook.com/" target='_blank' rel='noreferrer noopener'><FaFacebookF /></a>
                        <a href="https://Instagram.com/" target='_blank' rel='noreferrer noopener'><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navigation