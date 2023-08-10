import React from 'react'
import  './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
          <img className="avatar" src="data:image/jpeg;base64,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" alt="" />
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix" />

    </div>
  )
}

export default NavBar