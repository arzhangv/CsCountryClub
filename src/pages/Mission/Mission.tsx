import React from "react";
import "./mission.css";

const Mission: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-sm h-screen bg-[url('/src/assets/images/mission.jpg')] bg-cover bg-center">
      <div className="bg-black/60 absolute inset-0"></div>{" "}
      <div className="relative flex flex-col items-center justify-center h-full text-center p-4">
        <h1 className="text-6xl text-white font-semibold mb-4">Our Mission</h1>
        <p className="text-white text-xl max-w-4xl">
          This server was originally made with the purpose of creating a
          community based around the common goal of helping foster our careers
          in tech. The landscape and hiring requirements are rapidly changing.
        </p>
      </div>
    </div>
  );
};

export default Mission;
