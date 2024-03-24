import React from "react";
import "./mission.css";

const Mission: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden rounded-sm h-screen bg-[url('/src/assets/images/mission.jpg')] bg-cover bg-center">
        <div className="bg-black/50 absolute inset-0"></div>{" "} {/* TODO: either darken background image or change text color */}
        <div className="relative flex flex-col items-center justify-center h-full text-center p-4">
          <h1 className="text-6xl text-white font-semibold mb-4">Our Mission</h1>
          <p className="text-white text-xl max-w-4xl">
            This server was originally made with the purpose of creating a
            community based around the common goal of helping foster our careers
            in tech. With a rapidly changing hiring landscape, it's more important
            than ever that we help each other succeed.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-5">Community Goals</h1>
          <div className="space-y-10">
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-indigo-600">1</span>
              <h2 className="text-2xl font-semibold">Share</h2>
              <p className="max-w-md text-gray-600">
                We share useful and current information in the tech industry to all members.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-indigo-600">2</span>
              <h2 className="text-2xl font-semibold">Learn</h2>
              <p className="max-w-md text-gray-600">
                We build on our knowledge with team projects and group analysis of SWE texts.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-indigo-600">3</span>
              <h2 className="text-2xl font-semibold">Grow</h2>
              <p className="max-w-md text-gray-600">
                Thanks to our extensive expertise in the tech industry, we help all members improve their skills.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-indigo-600">4</span>
              <h2 className="text-2xl font-semibold">Prep</h2>
              <p className="max-w-md text-gray-600">
                We offer extensive interview prep materials and assistance from our members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
