import React from 'react'
import BlogSingle from '../../Components/BlogSingle'
import Makers from '../../Components/Makers'
import Author from '../../Components/Author'
import Read from '../../Components/Read'
import Subscribe from '../../Components/Subscribe'
import CopyRight from '../../Components/Copyright'
import Footers from '../../Components/Footers'

const SingleBlog = () => {
  return (
    <div>



    <BlogSingle/>
    <Makers/>
    <Author/>
    <Read/>
    <Subscribe/>
    <Footers />
      <CopyRight />
    </div>
  )
}

export default SingleBlog