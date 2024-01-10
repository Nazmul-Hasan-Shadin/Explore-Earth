import React from 'react';
import Planet from './Planet';

const PlanetTab = ({planet}) => {
 
   return (
    <div>
        {
            planet?.map((planet,idx)=> <Planet key={idx} planet={planet}></Planet>)
        }
    </div>
   )
      
   
};

export default PlanetTab;