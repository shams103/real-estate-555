import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import logo from '../../images_sp/logo.png'

const Header = () => {

   const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>

             {/* ------------logo-------------  */}
            <div className="logo">
                <img src={logo} alt='' />
            </div>

             {/* ------------navbar-------------  */}
         <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>

           {/* ------------navbar-button-------------  */}
          <div className='button flex'>
            <h4>
              <span>2</span> My List
            </h4>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div>

           {/* ------------navbar-toggle-------------  */}
          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>

        </div>
      </header>
    </>
  )
}

export default Header
