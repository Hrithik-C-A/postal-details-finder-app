import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PincodePage from './pages/PincodePage.jsx'
import BranchPage from './pages/BranchPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={App}/>
          <Route path='/search/pincode' Component={PincodePage}/>
          <Route path='/search/branchname' Component={BranchPage}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
