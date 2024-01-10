import React from 'react';

const Planet = ({planet}) => {

    const {name,images,description,distance,travel}= planet
     console.log(planet?.images?.png);
    return ( 
        <div>
        <div className="hero min-h-  mt-4 ">
 <div className="hero-content flex-col lg:flex-row">

  <img className='lg:w-[546px] lg:h-[500px]' src={images?.png} alt="" />

   <div className="w-[444px]  ml-[106px] ">
     <h3 className="text-[100px] text-[#D0D6F9]"> {name}</h3>
   
     <p className="py-6 lg:text- text-[#D0D6F9]">
     
       {description}
         </p>
     
         <div className="divider"></div> 
         <div className='flex gap-7'>
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