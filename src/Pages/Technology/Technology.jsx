import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Technology.css'

const Technology = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

      const [technology,setTechnology]= useState([])
      useEffect(()=>{
          fetch('data.json')
          .then(res=> res.json())
          .then(result=> setTechnology(result) )
      },[])
      
    return (
        <div className='relative'>
               <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >

        {
        technology?.technology?.map((technology,index)=> <SwiperSlide key={index}>
        
        <div className="hero   " style={{height:'calc(100vh - 70px)'}} >
           <div className="hero-content mr-[45%] flex-col lg:flex-row-reverse ">
       <img className='lg:h-[90%] lg:w-[42%] absolute bottom- right-0' src={technology?.images?.portrait} alt="" />
             <div className="w-[444px]  ">
                <h2 className='lg:text-[28px] text-[#fff] lg:pb-[154px]'>Meet Our Crew</h2>
             <h1 className="lg:text-[56px] font-bold text-white"> {technology?.role} </h1>
               <h3 className="text-3xl text-[#D0D6F9]">{technology?.name}</h3>
               
               <p className="py-6 lg:text- text-[#D0D6F9]">
               Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                   </p>
             
             </div>
           </div>
         </div>

        </SwiperSlide> )
        }

      

        </Swiper>
        </div>
    );
};

export default Technology;