import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Destination from '../Pages/Destination/Destination';
import Root from '../Layout/Root';
import Crew from '../Pages/Crew/Crew';
import Technology from '../Pages/Technology/Technology';


 const router= createBrowserRouter([{
     path:'/',
     element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
       {
        path: '/destination',
        element: <Destination></Destination>
       },
       {
        path: '/crew',
        element: <Crew></Crew>
       },
       {
        path: '/technology',
        element: <Technology></Technology>
       }

      ]
 }])
export default router;