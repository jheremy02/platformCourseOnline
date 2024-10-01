import React, { useState } from 'react'

import logo from '../assets/logo.png'
import { Button } from 'antd'
import { FaLinkedin } from 'react-icons/fa'
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../components/Navbar'
import { MdOutlineFileDownload } from 'react-icons/md'
import CommentCourse from '../components/CommentCourse'
import Footer from '../components/Footer'
function Detail() {
    const [dark, setDark] = useState(false)
    const onDark = { backgroundColor: '#111827', color: '#ffffff', }
    const stylesAccordiom = {

    }
    return (
        <>
            <div data-theme={dark ? 'dark' : 'light'} className={dark ? 'dark' : ''}>
                <div className='bg-white dark:bg-gray-800' >
                    <div className='bg-white pt-16 dark:bg-gray-800 w-full h-full'>

                    </div>
                    <Navbar setDark={setDark}></Navbar>
                    <div className='p-8 '>
                        <div className='grid  lg:grid-cols-4 gap-4'>

                            <div className='grid lg:col-span-3 gap-4'>


                                <div className="  p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">Curso de Especialización Fundamentos de Programación con Python</h5>
                                    </a>
                                    <figure className=" pt-4 px-1 overflow-hidden">
                                        <img
                                            src="https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg"
                                            alt="Shoes"
                                            className="rounded-xl object-cover w-full  max-h-80" />
                                    </figure>
                                    <div className='mt-6'>
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-white">Detalle de curso</h5>

                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Aprende los fundamentos de la programación con Python.</p>
                                    </div>

                                </div>
                                <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-white">Contenido del curso</h5>

                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 "></p>

                                    <div>
                                        <Accordion className='rounded-md'>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon className='dark:text-white' />}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                                style={dark ? onDark : { borderRadius: '2rem' }}
                                            >
                                                Módulo 1 - Introducción a Python
                                            </AccordionSummary>
                                            <AccordionDetails className='dark:bg-gray-800'>
                                                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <div className=" flex justify-between p-4">


                                                        <dl className="">
                                                            <dt className="sr-only">Message:</dt>
                                                            <dd className=" text-gray-500 dark:text-gray-400"> Módulo 1 - Introducción a Python [Parte 1]</dd>
                                                        </dl>

                                                        <dl>
                                                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">3:16</span>
                                                        </dl>

                                                    </div>
                                                    <div className="flex justify-between p-4">


                                                        <dl className="">
                                                            <dt className="sr-only">Message:</dt>
                                                            <dd className=" text-gray-500 dark:text-gray-400"> Módulo 1 - Introducción a Python [Parte 2]</dd>
                                                        </dl>
                                                        <dl>
                                                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">3:16</span>
                                                        </dl>

                                                    </div>
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon className='dark:text-white' />}
                                                className='bg-slate-950'
                                                aria-controls="panel2-content"
                                                id="panel2-header"
                                                style={dark ? onDark : {}}
                                            >
                                                Módulo 2 - Estructura de datos
                                            </AccordionSummary>
                                            <AccordionDetails className='dark:bg-gray-800'>
                                                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <div className=" flex justify-between p-4">


                                                        <dl className="">
                                                            <dt className="sr-only">Message:</dt>
                                                            <dd className=" text-gray-500 dark:text-gray-400"> Módulo 1 - Introducción a Python [Parte 1]</dd>
                                                        </dl>

                                                        <dl>
                                                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">3:16</span>
                                                        </dl>

                                                    </div>
                                                    <div className="flex justify-between p-4">


                                                        <dl className="">
                                                            <dt className="sr-only">Message:</dt>
                                                            <dd className=" text-gray-500 dark:text-gray-400">  Módulo 2 - Estructura de datos [Parte 1]</dd>
                                                        </dl>
                                                        <dl>
                                                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">3:16</span>
                                                        </dl>

                                                    </div>
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>

                                    </div>


                                </div>
                                <div className=' flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                                    <CommentCourse></CommentCourse>
                                    <CommentCourse></CommentCourse>
                                    <CommentCourse></CommentCourse>
                                </div>

                            </div>


                            <div className='flex flex-col gap-4'>
                                <div className="w-full max-w-md max-h-fit p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="flex items-center justify-between mb-4">
                                        <h5 className="text-xl font-bold leading-none text-gray-700 dark:text-white">Informacion del curso</h5>

                                    </div>
                                    <div className="flow-root">
                                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                            <li className="py-3 sm:py-4">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">

                                                    </div>
                                                    <div className="flex-1 min-w-0 ms-4">
                                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Publicado
                                                        </p>

                                                    </div>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        2024/02/10
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="py-3 sm:py-4">
                                                <div className="flex items-center ">
                                                    <div className="flex-shrink-0">

                                                    </div>
                                                    <div className="flex-1 min-w-0 ms-4">
                                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Visto
                                                        </p>

                                                    </div>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        23000 veces
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="py-3 sm:py-4">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">

                                                    </div>
                                                    <div className="flex-1 min-w-0 ms-4">
                                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Precio
                                                        </p>

                                                    </div>
                                                    <div className="badge badge-accent">Gratis</div>
                                                </div>
                                            </li>
                                            <li className="py-3 sm:py-4">
                                                <div className="flex items-center ">
                                                    <div className="flex-shrink-0">

                                                    </div>
                                                    <div className="flex-1 min-w-0 ms-4">
                                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Duracion
                                                        </p>

                                                    </div>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        18 hrs
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className='mt-4'>
                                            <Button type="primary" className='w-full' size='large' >Inscribirse</Button>
                                        </div>
                                    </div>
                                </div>


                                <div className="w-full px-8 py-6 max-h-72   bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">

                                    <div className="">
                                        <h5 className="text-xl font-bold leading-none text-gray-700 dark:text-white">Docente</h5>

                                    </div>
                                    <div className="flex flex-col items-center  mt-4">
                                        <img className="w-16 h-16 mb-3 rounded-full shadow-lg" src="https://inelinc.com/media/uploads/resource-fe4d197e-9fee-4b9b-a13c-dfa1f5f8397a.jpg" alt="Bonnie image" />
                                        <h5 className="mb-1 text-base font-medium text-gray-700 dark:text-white">Adrián Alarcón Becerra</h5>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Ingeniero Electricista con más de 8 años de experiencia. Con conocimiento en estudios eléctricos, sistemas de control y protecciones, sistemas de automatización en sistemas de potencia.</p>
                                        <div className="flex ">
                                            <ul className="flex space-x-4 sm:mt-0">
                                                <li>
                                                    <a href="https://www.linkedin.com/in/jheyson-jheremy-menendez-amado-165649181/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" target='_blank'>
                                                        <FaLinkedin className='text-lg hover:text-sky-700' />

                                                    </a>
                                                </li>


                                            </ul>

                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>

        </>
    )
}

export default Detail