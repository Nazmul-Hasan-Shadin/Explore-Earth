

const Banner = () => {
    return (
        <div className="hero   " style={{height:'calc(100vh - 70px)'}} >
        <div className="hero-content flex-col-reverse  lg:flex-row-reverse p-0 lg:p4">
      <div className="flex items-center  w-36 h-36 lg:w-[278px] lg:h-[278px] justify-center rounded-full bg-white lg:ml-[391px] ">
       <h2 className="text-3xl text-center">EXPLORE</h2>
    </div>
          <div className="lg:w-[444px] text-center ">
            <h3 className="lg:text-3xl text-[#D0D6F9]"> SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className="   font-bold text-white text-7xl lg:text-[150px]">SPACE</h1>
            <p className="py-6  text-[#D0D6F9]  w-80  lg:w-full">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
          
          </div>
        </div>
      </div>
    );
};

export default Banner;