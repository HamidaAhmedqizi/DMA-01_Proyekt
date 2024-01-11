import React from 'react'
import BlogData from '../../Data/BlogData'
import BlogItem from '../BlogItem'
import './style.css'

const AllBlog = () => {
  return (
    <section className='allblog'>
    <div className='allblog_container'>
      <div className="allblog_top">     
          <h2 className='allblog-title'>All Blog</h2>
      </div>
     

        <div className="allblog_container_items">
              {
               BlogData.map(({id,image, title})=>{
                  return (
                    <div key={id}>
                        <BlogItem id={id} image={image} title={title}/>
    
                    </div>
                  )
                })
              }

            


          </div>

        </div>

 


  </section>
  )
}

export default AllBlog