import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MaterialUISwitch from './ToggleMode'
import { Button } from 'antd'
import logo from '../assets/logo.png'

function Navbar({setDark}) {
    const navigate=useNavigate();
  return (
    <div  className="navbar    backdrop-blur-lg backdrop-filter fixed top-0 w-full z-50 shadow-md bg-white/30 dark:bg-gray-900/30  start-0  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              
            </div>
            <a className="ml-8 text-xl cursor-pointer" onClick={()=>{
              navigate('/')
            }}><img className="h-10" src={logo}></img></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">

              <li>
                <details>
                  <summary>Programas</summary>
                  <ul className="p-2">
                    <li><Link to={'/onlinePrograms'}><a>Programas Online</a></Link></li>
                    <li><Link to={'/paePrograms'}><a>Programas PAE</a></Link></li>
                  </ul>
                </details>
              </li>
              <li><Link to={'/webinars'}>Webinars</Link></li>
            </ul>
          </div>
          <div className="navbar-end flex gap-3">
            <MaterialUISwitch onChange={(e) => { if (e.target.checked) {
                setDark(true)
            }else{setDark(false)} }}></MaterialUISwitch>
            <Button size='large' type="primary">Crear Cuenta</Button>
          </div>
        </div>
  )
}

export default Navbar