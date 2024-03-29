import React from 'react'
import HomePage from '../../Pages/HomePage'
import ErrorPage from '../../Pages/ErrorPage'
import About from '../../Pages/AboutPage'
import Host from '../../Pages/HostPage'
import Blog from '../../Pages/BlogPage'
import Contact from '../../Pages/ContactPage'
import Podcasts from '../../Pages/PodcastPage'
import SinglePodcasts from '../../Pages/SinglePodcasts'
import SingleBlog from '../../Pages/SingleBlog'


 const myRoutes = [
    { id:1, path:'/', element:<HomePage/>},
    { id:2, path:'/podcasts', element:<Podcasts/>,title:'Podcasts'},
    { id:3, path:'/about', element:<About/>,title:'About'},
    { id:4, path:'/host', element:<Host/>,title:'Host'},
    { id:5, path:'/blog', element:<Blog/>,title:'Blog'},
    { id:6, path:'/contact', element:<Contact/>,title:'Contact'},
    { id:7, path:'*', element:<ErrorPage/>,},
    { id:8, path:'/singlepodcast', element:<SinglePodcasts/>,},
    { id:9, path:'/singleblog', element:<SingleBlog/>,},
    // { id: 10, path: '/singleblog/:blogId', element: <InCard /> },
    
]

export default myRoutes