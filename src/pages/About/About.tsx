import React from "react";
const About = () => {
  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden rounded-sm h-screen">
        <div className="absolute inset-0 bg-[url('/src/assets/images/calabasas-country-club-home-photo.jpg')] bg-cover bg-center"></div>
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center p-4">
          <h1 className="text-6xl text-white font-semibold mb-4">About Us</h1>
          <h4 className="text-4xl text-white font-semibold">Builders of The Best</h4>
          <p>
            We're a group of software engineers, CS majors and otherwise
            tech-enthusiastic individuals trying to establish a community
            of like-minded individuals navigating the turbulent post-pandemic
            tech market.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
