
import { Link, Outlet } from 'react-router-dom';
 import logo from '../../assets/ho.png'

const Navbar = () => {
    const links= <>
    <li className='mr-20'>   <Link>Home</Link> </li>
    <li className='mr-20'>   <Link to={'/destination'}> Destination</Link> </li>
    <li className='mr-20'>   <Link to={'/crew'}>Crew</Link> </li>
    <li className='mr-20'>   <Link to={'/technology'}>Technology</Link> </li>

    </>
    return (
        <div className='   '>       
        <div className="drawer z-10 ">
<input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
<div className="drawer-content flex flex-col ">
{/* Navbar */}
<div className="w-full flex-row-reverse navbar justify-between  lg:flex-row  ">
<div className="flex-none  lg:hidden">
  <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
  </label>
</div> 
<div className="  p-5  lg:flex-1  lg:px-2 lg:mx-2">  <img src={logo} alt="" /> </div>
<div  className="flex-none hidden  navlist  lg:w-[830px] lg:block">
  <ul className="menu menu-horizontal text-white ">
    {/* Navbar menu content here */}
    {
        links
    }
  </ul>
</div>
</div>
{/* Page content here */}

<Outlet></Outlet>
</div> 
<div className="drawer-side">
<label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
<ul className="menu p-4 w-80 min-h-full bg-base-200 ">
{/* Sidebar content here */}
 {links}
</ul>
</div>
</div>
</div>
    );
};

export default Navbar;