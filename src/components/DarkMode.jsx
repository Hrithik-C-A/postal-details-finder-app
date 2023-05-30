import React from 'react'
import {MdDarkMode} from 'react-icons/md'
import '../App.css'

const DarkMode = ({buttonCss,buttonSize}) => {
  return (
    <MdDarkMode size={buttonSize} className={`${buttonCss}`}/>
  )
}

export default DarkMode