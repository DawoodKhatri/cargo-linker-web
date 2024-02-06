import React from "react";

const HomePage = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-full object-cover object-top absolute top-0 left-0 -z-10"
        src="images/banner.jpeg"
      />

      <div className="w-full h-full bg-gradient-to-r from-black/75 to-black/25 flex flex-col justify-center p-8 md:p-16">
        <h1 className="text-primary tracking-widest text-7xl md:text-8xl lg:text-9xl font-bold drop-shadow-2xl">
          CARGO LINKER
        </h1>

        <p className="text-white tracking-wider font-semibold text-3xl md:text-4xl lg:text-5xl drop-shadow-2xl">
          STREAMLINED CONTAINER BOOKING APP
        </p>
      </div>
    </div>
  );
};

export default HomePage;
