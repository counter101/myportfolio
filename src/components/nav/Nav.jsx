import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageAltCheck } from "react-icons/bi";
import { useState } from 'react';


const Nav = () => {

  const [activeNav, setActivenow] = useState('#')

  return (
    <nav>
      <a href='#' onClick={() => setActivenow('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActivenow('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActivenow('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#services' onClick={() => setActivenow('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActivenow('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltCheck/></a>
    </nav>
  )
}

export default Nav
