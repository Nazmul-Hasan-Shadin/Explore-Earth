

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
      <div className=" w-[278px] h-[278px] flex items-center justify-center rounded-full bg-white lg:ml-[391px] ">
       <h2 className="text-3xl text-center">EXPLORE</h2>
    </div>
          <div className="w-[444px] ">
            <h3 className="text-3xl text-[#D0D6F9]"> SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className="lg:text-[150px] font-bold text-white">SPACE</h1>
            <p className="py-6 lg:text- text-[#D0D6F9]">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
          
          </div>
        </div>
      </div>
    );
};

export default Banner;