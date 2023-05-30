import React from 'react'

const LinkSwitch = ({linkUrl,linkName,linkCss}) => {
  return (
    <a href={linkUrl} className={`${linkCss}`}>{linkName}</a>
  )
}

export default LinkSwitch