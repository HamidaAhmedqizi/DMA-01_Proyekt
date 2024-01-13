
import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const BlogItem = ({ image,   title}) => {
    return (
        <div className='Blog_item_list'>
            <div className='images_Blogitem'> 
                <Link to ='/singleblog'><img src={image} alt="" /></Link>
            </div>
            <div className="Blogitem_btn_text">
                <h3 className='Blogitem_title'>{title}</h3>
                <p className='Blogitem_desc' >Lorem ipsum dolor sit amet,
                 consetetur sadipscing elitr, sed diam nonumy eirmod tempor. </p>
                 <button className='Blogitem_btn'> Read Now</button>
                </div>
                
            </div>
       
)}

export default  BlogItem