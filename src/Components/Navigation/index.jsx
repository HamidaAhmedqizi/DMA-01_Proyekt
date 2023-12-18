import React from 'react'
import myRoutes from '../MyRoutes'
import { NavLink } from 'react-router-dom'
import styles from './style.css'


const Navigation = () => {
  return (
    <header>
        <div className="logo"></div>
        <nav>
            {
                myRoutes.map(({id,path,title})=>{
                return (
<NavLink key={id} to={path}>{title}</NavLink>
                )
                    
                
                })
                
                
            }
        </nav>
    </header>
  )
}

export default Navigation