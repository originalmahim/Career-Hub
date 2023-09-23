

import './Banner.css'
const Banner = () => {
          return (
          <div className="bg-gradient-to-r from-violet-100 via-white to-violet-100" >
          <div className="max-w-7xl mx-auto lg:h-[60vh] md:h-[30vh] border-none rounded-md mb-5 px-3 bg-no-repeat bg-right" style={{ backgroundImage: "url('https://i.ibb.co/0YkrMGM/user.png')", backgroundSize: '620px 580px', }}>
  <div className=" items-center h-full pt-24">
    <h1 className="text-left lg:text-7xl font-bold">
      One Step <br />
      Closer To Your <br />
      <span className="text-violet-400">Dream Job</span>
    </h1>
    <p className="text-xl mt-3">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
    <button id="btn-bagu" className="btn mt-4 ">Get Started</button>
  </div>
</div>
          </div>
          );
};

export default Banner;