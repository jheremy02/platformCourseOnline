import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MaterialUISwitch from './ToggleMode'
import { Dropdown } from "flowbite-react";
import { Button } from 'antd'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];
function Navbar({ setDark }) {
  const navigate = useNavigate();
  return (
    <div className="navbar    backdrop-blur-lg backdrop-filter fixed top-0 w-full z-50 shadow-md bg-white/30 dark:bg-gray-900/30  start-0  ">
      <div className="navbar-start">
        <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className='text-3xl cursor-pointer lg:hidden text-gray-700 dark:text-white'><GiHamburgerMenu />
        </span>}>

          <Dropdown.Item> <Dropdown label="Cursos" inline placement="right-start">
            <Dropdown.Item>Backend</Dropdown.Item>
            <Dropdown.Item>Frontend</Dropdown.Item>
            <Dropdown.Item>Martketing</Dropdown.Item>
            <Dropdown.Item>Diseño</Dropdown.Item>
          </Dropdown></Dropdown.Item>

          <Dropdown.Item><span className='cursor-pointer'>Planes</span></Dropdown.Item>
        </Dropdown>
        <a className="ml-8 text-xl cursor-pointer" onClick={() => {
          navigate('/')
        }}><img className="h-10" src={logo}></img></a>
      </div>

      <div className=' gap-6 lg:flex hidden'>
        <Dropdown label="Cursos" inline>
          <Dropdown.Item>Backend</Dropdown.Item>
          <Dropdown.Item>Frontend</Dropdown.Item>
          <Dropdown.Item>Martketing</Dropdown.Item>
          <Dropdown.Item>Diseño</Dropdown.Item>
        </Dropdown>
        <span className='cursor-pointer'>Planes</span>
      </div>


      <div className="navbar-end flex gap-3">
        <MaterialUISwitch onChange={(e) => {
          if (e.target.checked) {
            setDark(true)
          } else { setDark(false) }
        }}></MaterialUISwitch>
        <Button size='large' type="primary">Crear Cuenta</Button>
      </div>
    </div>
  )
}

export default Navbar