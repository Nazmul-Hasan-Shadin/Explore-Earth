import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import './crew.css'

const Crew = () => {
    const [crewInfo,setCrewInfo]= useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(result=> setCrewInfo(result) )
    },[])
 
    return (
        <div className='z-0'>
              <Swiper
        spaceBetween={100}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper swiper-pagination-horizontal "
      >
   
       {
          crewInfo?.crew?.map((crew,indx)=>   <SwiperSlide key={indx}> 
            <div className="hero min-h-screen  " style={{height:'calc(100vh - 70px)'}} >
           <div className="hero-content  lg:mr-[45%] flex-col lg:flex-row-reverse  ">
          <div className='w-full pl-12'>
          <img className='  h-[220px] bottom-0 right-16 lg:h-[90%]   lg:w-[42%] md:absolute  ' src={crew?.images?.png} alt="" />
          </div>
             <div className="w-[444px]  ">
                <h2 className='text-[#fff]  lg:text-[28px] lg:pb-[154px]'>Meet Our Crew</h2>
             <h1 className="lg:text-[56px] font-bold text-white"> {crew?.role} </h1>
               <h3 className="text-3xl text-[#D0D6F9]">{crew?.name}</h3>
               
               <p className=" w-80  p-4 lg:w-full text-sm lg:text-base  lg:py-6  lg:text-start text-[#D0D6F9]">
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

export default Crew;