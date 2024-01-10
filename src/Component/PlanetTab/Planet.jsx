import React from 'react';

const Planet = ({planet}) => {

    const {name,images,description,distance,travel}= planet
     console.log(planet?.images?.png);
    return ( 
        <div>
        <div className="hero min-h-  mt-4  ">                   
 <div className="hero-content flex-col lg:flex-row p-0 lg:p-4">

  <img className=' w-64 h-64 lg:w-[546px] lg:h-[500px]' src={images?.png} alt="" />

   <div className="  mt-12 lg:mt-0 lg:w-[444px]  lg:ml-[106px] text-center lg:text-start ">
     <h3 className="text-[#D0D6F9] text-6xl lg:text-[100px] "> {name}</h3>
   
     <p className="py-6 lg:text- text-[#D0D6F9] w-80 mx-auto lg:w-full">
     
       {description}
         </p>
     
         <div className="divider"></div> 
         <div className='flex gap-7 flex-col lg:flex-row'>
            <div>
              <h2 className='text-[#fff]'>AVG. DISTANCE</h2>
              <h1 className='text-[#D0D6F9] text-3xl'>{distance}</h1>
            </div>

            <div>
              <h2 className='text-[#fff]'>Est. travel time</h2>
              <h1 className='text-[#D0D6F9] text-3xl'>{travel} DAYS Km</h1>
            </div>
         </div>

   </div>
 </div>
</div>
 </div>
    );
};

export default Planet;