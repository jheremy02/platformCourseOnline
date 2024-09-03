import { useEffect, useState } from 'react'


import { Button } from 'antd'
import 'animate.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.png'
import categoryCourseOnline from './assets/images/categories/courseOnline.png'
import webinars from './assets/images/categories/webinars.png'
import Slider from 'react-slick'

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Home from './views/Home'
import Detail from './views/Detail';
import Webinars from './views/Webinars';
import OnlinePrograms from './views/OnlinePrograms';
import PaePrograms from './views/PaePrograms';
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
  const [count, setCount] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,


  };


  return (
    <>
      <Router>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/onlinePrograms" element={<OnlinePrograms />} />
          <Route path="/paePrograms" element={<PaePrograms />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
