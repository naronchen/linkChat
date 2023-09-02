import React from 'react'
import './Header.css'
import robotImg from '../assets/robot.png'

function Header() {
  return (
    <div className="header">
        <img  src={robotImg} 
            alt="Robot" 
            className="robot-img"/>
        Albert
    </div>
  )
}

export default Header