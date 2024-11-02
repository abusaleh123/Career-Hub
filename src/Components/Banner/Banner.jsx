import profile from '../../assets/assets/images/user.png'

const Banner = () => {
    return (
       
            <div className="hero bg-purple-50 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={profile}
      className="max-w-2xl rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-7xl font-bold leading-snug ">One Step <br /> Closer To Your <br /> <span className="dream">Dream Job</span></h1>
      <p className=" my-4 text-lg w-3/4">
      Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
      </p>
      <button className="btn btn-gr text-white font-bold">Get Started</button>
    </div>
  </div>
</div>
        
    );
};

export default Banner;