import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import Navigation from './Components/Navigation/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
<Navigation/>
   <App />
 </BrowserRouter>
  
  
)
