import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Destination from '../Pages/Destination/Destination';
import Root from '../Layout/Root';

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
       }

      ]
 }])
export default router;