import React from 'react'
import { MdOutlineTravelExplore } from 'react-icons/md'
import './Navbar.scss'
const Navbar = () => {
  return (
    <section className='navBarSection'>
      <div className="header flex">
        <div className="logoDiv">
          <a href="#" className='logo flex'>
            <h1><MdOutlineTravelExplore className='icon'/>Travel</h1>
          </a>
        </div>
      </div>

    </section>
  )
}

export default Navbar