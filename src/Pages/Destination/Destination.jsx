import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import PlanetTab from '../../Component/PlanetTab/PlanetTab';
import 'react-tabs/style/react-tabs.css';

const Destination = () => {
    const [earthInfo,setEarthInfo]=useState([])
     useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(result=>  setEarthInfo(result) )

     },[])
   
 
     const moon= earthInfo?.destinations?.filter(moon=> moon.name==='Moon')

   
     const marse= earthInfo?.destinations?.filter(marse=> marse.name==='Mars')
     const europa= earthInfo?.destinations?.filter(europa=> europa.name==='Europa')
     const titan= earthInfo.destinations?.filter(titan=>titan.name==='Titan')
     
    return (
        <div>
        <Tabs>
          <TabList>
            <Tab>Moon</Tab>
            <Tab>Mars</Tab>
            <Tab>Europa</Tab>
            <Tab>Titan</Tab>
          </TabList>
          {/* content part inside tabpanel */}

          <TabPanel >  
             <PlanetTab planet={moon}></PlanetTab>
             </TabPanel>

             <TabPanel >  
             <PlanetTab planet={marse}></PlanetTab>
             </TabPanel>

             <TabPanel >  
             <PlanetTab planet={europa}></PlanetTab>
             </TabPanel>

             <TabPanel >  
             <PlanetTab planet={titan}></PlanetTab>
             </TabPanel>

        </Tabs>
        </div>
    );
};

export default Destination;