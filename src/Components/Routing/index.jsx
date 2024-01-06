import React from 'react'
import { Route, Routes } from 'react-router-dom'
import myRoutes from '../MyRoutes'


const Routing = () => {
  return (
    <div>
     
        <Routes>
          {
            myRoutes.map(({ id, path, element }) => {
              return (

                <Route key={id} path={path} element={element} />
              )
            })
          }


        </Routes>
   

    </div>
  )


}

export default Routing