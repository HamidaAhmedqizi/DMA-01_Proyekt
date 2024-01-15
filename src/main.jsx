import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import Navigation from './Components/Navigation/index.jsx'
import Footers from './Components/Footers/index.jsx'
import CopyRight from './Components/Copyright/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
    
      
      <App />
<Footers/>
<CopyRight/>
    </BrowserRouter>
  </React.StrictMode>



)
