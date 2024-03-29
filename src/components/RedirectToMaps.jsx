import React from 'react'

const RedirectToMaps = ({query}) => {
    const url = `http://maps.google.com?q=${query}`;
    
  return (
    <a href={url} style={{textDecoration: 'none'}} target='_blank'>View On Maps</a>
  )
}

export default RedirectToMaps