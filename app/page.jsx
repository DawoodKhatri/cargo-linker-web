import React from "react";

const HomePage = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-full object-cover object-top absolute top-0 left-0 -z-10"
        src="images/banner.jpeg"
      />

      <div className="w-full h-full bg-gradient-to-br from-black/50 to-black/25 flex flex-col justify-center p-8 md:p-16">
       
         <h1 className="text-primary tracking-wider text-7xl md:text-8xl lg:text-9xl font-bold drop-shadow-2xl">
          CARGO LINKER
        </h1>
       
        <p className="text-white tracking-wide font-semibold text-2xl md:text-3xl lg:text-4xl drop-shadow-2xl">
          BRIDGING TRADERS AND LOGISTIC SERVICE PROVIDERS
        </p>
      </div>
    </div>
  );
};

export default HomePage;
