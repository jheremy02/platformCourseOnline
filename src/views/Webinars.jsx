import { Button } from 'antd'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Navbar from '../components/Navbar'

function Webinars() {
    const [dark, setDark] = useState(false)
    return (
        <div data-theme={dark ? 'dark' : 'light'} className={dark ? 'dark' : ''}>
            <div className='bg-white dark:bg-gray-800' >
                <div className='bg-white pt-16 dark:bg-gray-800 w-full h-full'>

                </div>
                <Navbar setDark={setDark}></Navbar>
                <section
  className="relative"
  style={{
    backgroundImage: "url(https://images.pexels.com/photos/3987012/pexels-photo-3987012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundAttachment: "fixed"
  }}
>
  {/* Overlay layer */}
  <div className="absolute inset-0 bg-slate-950 opacity-50"></div>

  <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-white text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
      Descubre los mejores webinars en ingeniería. Conecta con expertos
      </h1>
      <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
        
      </p>
    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex opacity-0">
      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
    </div>
  </div>
</section>

                <section className='p-8'>
                    <div></div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        <div className="card  bg-base-100   shadow-xl transform transition-transform duration-300 hover:scale-105">
                            <figure className='max-h-44'>
                                <img
                                    src="https://inelinc.com/media/uploads/resource-667b8236-8f5f-4b20-8de0-f1ebdc2ae2ee.jpg"
                                    alt="Shoes" className='object-cover bg-cover w-full' />
                            </figure>
                            <div className="card-body p-5">
                                <h2 className="card-title text-base">Masterclass: Caso aplicativo de selección de equipamiento de MT de una subestación de distribución</h2>
                                <div>
                                    <div className="flex-1  py-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Kamal Arreaza
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            Speaker
                                        </p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className="badge badge-accent p-2"><h3>Gratis</h3>
                                        </div>
                                        <div className="badge p-2">2024/06/23</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card  bg-base-100   shadow-xl transform transition-transform duration-300 hover:scale-105">
                            <figure className='max-h-44'>
                                <img
                                    src="https://inelinc.com/media/uploads/resource-5b0ce044-1179-4375-bc75-31959a0fd8cd.jpg"
                                    alt="Shoes" className='object-cover bg-cover w-full' />
                            </figure>
                            <div className="card-body p-5">
                                <h2 className="card-title text-base">Masterclass: Caso aplicativo de selección de equipamiento de MT de una subestación de distribución</h2>
                                <div>
                                    <div className="flex-1  py-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Kamal Arreaza
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            Speaker
                                        </p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className="badge badge-accent p-2"><h3>Gratis</h3>
                                        </div>
                                        <div className="badge p-2">2024/06/23</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="card  bg-base-100   shadow-xl transform transition-transform duration-300 hover:scale-105">
                            <figure className='max-h-44'>
                                <img
                                    src="https://inelinc.com/media/uploads/resource-36e2fbec-25ce-4021-b371-9c033ca593c2.jpg"
                                    alt="Shoes" className='object-cover bg-cover w-full' />
                            </figure>
                            <div className="card-body p-5">
                                <h2 className="card-title text-base">Masterclass: Caso aplicativo de selección de equipamiento de MT de una subestación de distribución</h2>
                                <div>
                                    <div className="flex-1  py-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Kamal Arreaza
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            Speaker
                                        </p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className="badge badge-accent p-2"><h3>Gratis</h3>
                                        </div>
                                        <div className="badge p-2">2024/06/23</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card  bg-base-100   shadow-xl transform transition-transform duration-300 hover:scale-105">
                            <figure className='max-h-44'>
                                <img
                                    src="https://inelinc.com/media/uploads/resource-644e6741-6f0d-4873-93de-a0d59fa4ebaa.jpg"
                                    alt="Shoes" className='object-cover bg-cover w-full' />
                            </figure>
                            <div className="card-body p-5">
                                <h2 className="card-title text-base">Masterclass: Caso aplicativo de selección de equipamiento de MT de una subestación de distribución</h2>
                                <div>
                                    <div className="flex-1  py-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Kamal Arreaza
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            Speaker
                                        </p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className="badge badge-accent p-2"><h3>Gratis</h3>
                                        </div>
                                        <div className="badge p-2">2024/06/23</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Webinars