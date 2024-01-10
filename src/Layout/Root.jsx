import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navstyle.css'
import Navbar from '../Shared/Navbar/Navbar';
import backgroundImgae from '../assets/home/background-home-desktop.jpg'
const Root = () => {

    return (
       <div className='relative'  style={{ backgroundImage: `url(${backgroundImgae })`,height:'100vh' }}>
       <Navbar></Navbar>
       </div>
    );
};

export default Root;