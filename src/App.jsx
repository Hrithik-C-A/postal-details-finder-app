import React from 'react'
import './App.css'
import {MdDarkMode} from 'react-icons/md'

const App = () => {
  return (
    <div className='container'>
      <MdDarkMode size={32} className='darkmode-button'/>
      <img src="https://media1.giphy.com/media/C0o4OhvZk3SNKzL0iU/giphy.gif?cid=ecf05e47ref0562df50yl7l1zvielwv2jjx4zvbfk6hr0vsr&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="postbox image" />
      <h1>Postal Deatils Finder App</h1>
        <div className='link-container'>
          <a href='/search/pincode' className='link pincode-link'>Search By Pincode</a>
          <a href='/search/branchname' className='link branch-link'>Search By BranchName</a>
        </div>
    </div>
  )
}

export default App