import React from 'react'
import Startup from '../../Components/Startup'
import AllBlog from '../../Components/AllBlog'
import Subscribe from '../../Components/Subscribe'
import Footers from '../../Components/Footers'
import CopyRight from '../../Components/Copyright'

const Blog = () => {
  return (
    <div>
      <Startup/>
      <AllBlog/>
      <Subscribe />
      <Footers />
      <CopyRight />
    </div>
  )
}

export default Blog