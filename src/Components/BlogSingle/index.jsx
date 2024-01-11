import React from 'react'
import './style.css'
import imageblog from '../../Images/singleBlogImage.png'


const BlogSingle = () => {
  return (
    <section className='blogSingle'>
<div className="blogsingle_container">
<div className="blogsingle_text_cont">
    <p className='blogsingle_date'> 12 Sep 2021</p>
    <h2 className='blogsingle_title'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars.</h2>
</div>
<div className="blogsingleimage">
    <img src={imageblog} alt="" />
</div>
</div>


    </section>
  )
}

export default BlogSingle