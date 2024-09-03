import { useState } from 'react'
import reactLogo from '../assets/react.svg'


import { Button } from 'antd'
import 'animate.css';

import logo from '../assets/logo.png'
import categoryCourseOnline from '../assets/images/categories/courseOnline.png'
import webinars from '../assets/images/categories/webinars.png'
import Slider from 'react-slick'

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Link, useNavigate } from 'react-router-dom';
import MaterialUISwitch from '../components/ToggleMode';
import Navbar from '../components/Navbar';



function Home() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false)
  const [count, setCount] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,


  };



  return (
    <div data-theme={dark ? 'dark' : 'light'} className={dark ? 'dark' : ''}>
      <div className='bg-white dark:bg-gray-800' >
        <div className='bg-white pt-16 dark:bg-gray-800 w-full h-full'>

        </div>
        <Navbar setDark={setDark}></Navbar>

        <section
          className=""
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-white text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                ¡Tu futuro te está esperando!
              </h1>
              <p className="max-w-2xl mb-6 font-normal text-white lg:mb-8 md:text-lg lg:text-xl">
                Somos una empresa de capacitaciones en ingeniería, con usuarios en toda Latinoamérica.
              </p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex opacity-0">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
            </div>
          </div>
        </section>

        <div className="p-14">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper2"
          >
            <SwiperSlide><div className=" p-0 grid md:grid-cols-2 gap-6">

              <div>
                <div className='pb-6'>
                  <div className="badge badge-accent">Proximo curso</div>
                </div>
                <h1 className="text-3xl font-bold">Curso de Especialización Fundamentos de Programación con Python</h1>
                <p className="py-6">
                  Aprende los fundamentos de la programación con Python.
                </p>
                <Button size='large' type="primary" onClick={() => {
                navigate('/detail')
              }}>Ver Detalle</Button>
              </div>
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-1.png"
                className=" rounded-lg w-full shadow-2xl object-cover max-h-52" />

            </div></SwiperSlide>
            <SwiperSlide><div className=" p-0 grid md:grid-cols-2 gap-6">

              <div>
                <div className='pb-6'>
                  <div className="badge badge-accent">Proximo curso</div>
                </div>
                <h1 className="text-3xl font-bold">Specialization Program High Voltage Direct Current Transmission - HVDC</h1>
                <p className="py-6">
                Certified as a specialist on High Voltage Direct Current Transmission - HVDC
                </p>
                <Button size='large' type="primary" onClick={() => {
                navigate('/detail')
              }}>Ver Detalle</Button>
              </div>
              <img
                src="https://images.pexels.com/photos/6755091/pexels-photo-6755091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className=" rounded-lg w-full shadow-2xl object-cover max-h-52 " />

            </div></SwiperSlide>
            <SwiperSlide><div className=" p-0 grid md:grid-cols-2 gap-6">

              <div>
                <div className='pb-6'>
                  <div className="badge badge-accent">Proximo curso</div>
                </div>
                <h1 className="text-3xl font-bold">Programa de Especialización Sistemas de Almacenamiento de Energía BESS</h1>
                <p className="py-6">
                Certifícate como especialista en sistemas BESS, aprende desde el diseño y dimensionamiento de los componentes hasta realizar la evaluación económica.
                </p>
                <Button size='large' type="primary" onClick={() => {
                navigate('/detail')
              }}>Ver Detalle</Button>
              </div>
              <img
                src="https://images.pexels.com/photos/45917/pexels-photo-45917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className=" rounded-lg w-full shadow-2xl object-cover max-h-52" />

            </div></SwiperSlide>

          </Swiper>

        </div>
        <div className=" bg-gray-50 flex items-center">
          <section className="bg-cover bg-center py-16 w-full" style={{
            backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1481026469463-66327c86e544.webp)",
          }} >
            <div className="container mx-auto  text-white">
              <div className="grid md:grid-cols-2 items-center">
                <div className="w-1/2 text-slate-800 pl-6">
                  <h1 className="text-5xl  font-medium mb-6">Acelera tu crecimiento</h1>
                  <p className="text-xl  mb-12">Accede desde cualquier lugar a nuestros programas.</p>

                </div>
                <div className=" pl-16">
                  <div className='flex gap-4 flex-wrap '>
                    <a onClick={() => {
                      navigate('/onlinePrograms');
                    }}>
                      <div className=" cursor-pointer card glass max-w-48 transform transition-transform duration-300 hover:scale-110">

                        <div className="p-5 flex flex-row gap-3 items-center justify-center">
                          <img src={categoryCourseOnline} className='h-12'></img>
                          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Programas Online</h5>


                        </div>
                      </div>
                    </a>
                    <a onClick={() => {
                      navigate('/webinars')
                    }}>
                      <div className="cursor-pointer card glass max-w-48 transform transition-transform duration-300 hover:scale-110">

                        <div className="p-5 flex flex-row gap-3 items-center justify-center">
                          <img src={webinars} className='h-12'></img>
                          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Webinars</h5>


                        </div>
                      </div>
                    </a>
                    <a onClick={() => {
                      navigate('/paePrograms')
                    }}>
                      <div className="cursor-pointer card glass max-w-48 transform transition-transform duration-300 hover:scale-110">

                        <div className="p-5 flex flex-row gap-3 items-center justify-center">
                          <img src={categoryCourseOnline} className='h-12'></img>
                          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Programas PAE</h5>

                        </div>
                      </div>
                    </a>
                    <div className=" cursor-pointer card glass max-w-48 transform transition-transform duration-300 hover:scale-110">

                      <div className="p-5 flex flex-row gap-3 items-center justify-center">
                        <img src={categoryCourseOnline} className='h-12'></img>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Programas Asincronos</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className='py-10 relative'>
          <div className=''>
            <Swiper


              centeredSlides={true}
              spaceBetween={18} // Espacio entre los slides en píxeles
              slidesPerView={5} // Cantidad de cards visibles a la vez
              loop={true} // Habilitar el loop
              pagination={{ clickable: true }} // Habilitar la paginación
              navigation={{
                nextEl: '.custom-next-button',
                prevEl: '.custom-prev-button',
              }}
              modules={[Navigation]}
              className='  py-8 px-8'
              breakpoints={{
                400: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 14,
                },
                1080: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide onClick={() => {
                navigate('/detail')
              }} className='cursor-pointer transform transition-transform duration-300 hover:scale-105'>
                <div className=" card  bg-base-100   shadow-xl">
                  <figure className='max-h-44'>
                    <img
                      src="https://inelinc.com/media/uploads/resource-5b0ce044-1179-4375-bc75-31959a0fd8cd.jpg"
                      alt="Shoes" className='object-cover bg-cover w-full' />
                  </figure>
                  <div className="card-body p-5">
                    <h2 className="card-title text-base">Curso de Especialización Análisis de Sistemas Eléctricos con el Software DIgSILENT PowerFactory</h2>
                    <div>
                      <div className="badge badge-accent p-2"><h3>Gratis</h3></div></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide onClick={() => {
                navigate('/detail')
              }} className='cursor-pointer transform transition-transform duration-300 hover:scale-105'>
                <div className="card   bg-base-100  shadow-xl">
                  <figure className='max-h-44'>
                    <img
                      src="https://inelinc.com/media/uploads/resource-1c45ba71-e725-4285-924b-f0e957e4a227.jpg"
                      alt="Shoes" className='object-cover bg-cover w-full' />
                  </figure>
                  <div className="card-body p-5">
                    <h2 className="card-title text-base">Curso de Especialización Análisis de Sistemas Eléctricos con el Software DIgSILENT PowerFactory</h2>
                    <div>
                      <div className="badge badge-accent p-2"><h3>Gratis</h3></div></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide onClick={() => {
                navigate('/detail')
              }} className='cursor-pointer transform transition-transform duration-300 hover:scale-105'>
                <div className="card  bg-base-100  shadow-xl">
                  <figure className='max-h-44'>
                    <img
                      src="https://inelinc.com/media/uploads/resource-5b0ce044-1179-4375-bc75-31959a0fd8cd.jpg"
                      alt="Shoes" className='object-cover bg-cover w-full' />
                  </figure>
                  <div className="card-body p-5">
                    <h2 className="card-title text-base">Curso de Especialización Análisis de Sistemas Eléctricos con el Software DIgSILENT PowerFactory</h2>
                    <div>
                      <div className="badge badge-accent p-2"><h3>Gratis</h3></div></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide onClick={() => {
                navigate('/detail')
              }} className='cursor-pointer transform transition-transform duration-300 hover:scale-105'>
                <div className="card  bg-base-100  shadow-xl">
                  <figure className='max-h-44'>
                    <img
                      src="https://inelinc.com/media/uploads/resource-bac2dc42-d306-4362-9d86-5cc95724ae8f.jpg"
                      alt="Shoes" className='object-cover bg-cover w-full' />
                  </figure>
                  <div className="card-body p-5">
                    <h2 className="card-title text-base">Curso de Especialización Análisis de Sistemas Eléctricos con el Software DIgSILENT PowerFactory</h2>
                    <div>
                      <div className="badge badge-accent p-2"><h3>Gratis</h3></div></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide onClick={() => {
                navigate('/detail')
              }} className='cursor-pointer transform transition-transform duration-300 hover:scale-105'>
                <div className="card  bg-base-100   shadow-xl">
                  <figure className='max-h-44'>
                    <img
                      src="https://inelinc.com/media/uploads/resource-bac2dc42-d306-4362-9d86-5cc95724ae8f.jpg"
                      alt="Shoes" className='object-cover bg-cover w-full' />
                  </figure>
                  <div className="card-body p-5">
                    <h2 className="card-title text-base">Curso de Especialización Análisis de Sistemas Eléctricos con el Software DIgSILENT PowerFactory</h2>
                    <div>
                      <div className="badge badge-accent p-2"><h3>Gratis</h3></div></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide onClick={() => {
                navigate('/detail')
              }} className='cursor-pointer transform transition-transform duration-300 hover:scale-105'>
                <div className="card  bg-base-100  shadow-xl">
                  <figure className='max-h-44'>
                    <img
                      src="https://inelinc.com/media/uploads/resource-bac2dc42-d306-4362-9d86-5cc95724ae8f.jpg"
                      alt="Shoes" className='object-cover bg-cover w-full' />
                  </figure>
                  <div className="card-body p-5">
                    <h2 className="card-title text-base">Curso de Especialización Análisis de Sistemas Eléctricos con el Software DIgSILENT PowerFactory</h2>
                    <div>
                      <div className="badge badge-accent p-2"><h3>Gratis</h3></div></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide onClick={() => {
                navigate('/detail')
              }} className='cursor-pointer transform transition-transform duration-300 hover:scale-105'>
                <div className="card  bg-base-100   shadow-xl">
                  <figure className='max-h-44'>
                    <img
                      src="https://inelinc.com/media/uploads/resource-bac2dc42-d306-4362-9d86-5cc95724ae8f.jpg"
                      alt="Shoes" className='object-cover bg-cover w-full' />
                  </figure>
                  <div className="card-body p-5">
                    <h2 className="card-title text-base">Curso de Especialización Análisis de Sistemas Eléctricos con el Software DIgSILENT PowerFactory</h2>
                    <div>
                      <div className="badge badge-accent p-2"><h3>Gratis</h3></div></div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Button
              className="custom-prev-button absolute left-2 top-1/2 transform -translate-y-1/2 z-10"

              shape="circle"
              icon={<IoIosArrowBack />}
            />
            <Button
              className="custom-next-button absolute right-2 top-1/2 transform -translate-y-1/2 z-10"

              shape="circle"
              icon={<IoIosArrowForward />}
            />

          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
