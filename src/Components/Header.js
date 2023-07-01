import React from 'react'
import logo from '../images/trollface.png'
export default function Navbar() {
  return (
<header className='header'>
      <img className='header--image' src={logo} alt="" />
      <h2 className='header--title'>Meme Generator</h2>
      <h5 className='header--project'>React Course - Project 3</h5>
</header>
  )
}
