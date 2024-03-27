import React from "react";
import tesla_logo from "../../assets/images/logos/tesla.png"
import meta_logo from "../../assets/images/logos/meta.png"
import microsoft_logo from "../../assets/images/logos/microsoft.png"
import amazon_logo from "../../assets/images/logos/amazon.png"
import datadog_logo from "../../assets/images/logos/datadog.png"
import tiktok_logo from "../../assets/images/logos/tiktok.png"
import google_logo from "../../assets/images/logos/google.png"
import coinbase_logo from "../../assets/images/logos/coinbase.png"
import roblox_logo from "../../assets/images/logos/roblox.png"
import palantir_logo from "../../assets/images/logos/palantir.png"
import snowflake_logo from "../../assets/images/logos/gitsnowflake.png"
const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
        <div className="relative overflow-hidden rounded-sm h-screen">
            <div
                className="absolute inset-0 bg-[url('/src/assets/images/calabasas-country-club-home-photo.jpg')] h-1/2 bg-cover bg-center"></div>
            <div className=" absolute inset-0"></div>
            <div className="bg-black/50 relative flex flex-col items-center justify-center  text-center p-4 h-1/2">
                <h1 className="text-6xl text-white font-semibold mb-4">CS Country Club</h1>
                <h4 className="text-4xl text-white font-semibold ">The Best for the Best</h4>
            </div>
            <div className="bg-white/10 text-3xl h-1/2 flex flex-col items-center justify-center">
                <h1 className="p-8"> Join an active community with members from top companies </h1>

                <div className="flex flex-row items-center justify-center">
                    <div className="h-28 w-34 ">
                        <img src={meta_logo} className="object-cover object-center h-full w-full"/>
                    </div>
                    <div className="h-24 w-28 p-2">
                        <img src={tesla_logo}/>
                    </div>
                    <div className="h-28 w-36 p-2">
                        <img src={microsoft_logo} className="object-cover object-center h-full w-full"/>
                    </div>
                    <div className="h-28 w-34 p-2">
                        <img src={amazon_logo} className="object-cover object-center h-full w-full"/>
                    </div>
                    <div className="h-24 w-24 p-2">
                        <img src={datadog_logo} className="object-cover object-center h-full w-full"/>
                    </div>
                    <div className="h-24 w-28 p-2">
                        <img src={tiktok_logo} className="object-cover object-center h-full w-full"/>
                    </div>

                </div>
                <div className="flex flex-row items-center justify-center ">
                    <div className="h-28 w-30 p-4">
                        <img src={google_logo} className="object-cover object-center h-full w-full"/>
                    </div>
                    <div className="h-24 w-24 p-2">
                        <img src={coinbase_logo}/>
                    </div>
                    <div className="h-28 w-36 p-2">
                        <img src={roblox_logo} className="object-cover object-center h-full w-full"/>
                    </div>
                    <div className="h-28 w-36 p-2">
                        <img src={palantir_logo} className="object-cover object-center h-full w-full"/>
                    </div>
                    <div className="h-24 w-24 p-2 ">
                        <img src={snowflake_logo} className="object-cover object-center h-full w-full"/>
                    </div>
                    <div className="h-24 w-24 p-2">
                        <img src={tesla_logo} className="object-cover object-center h-full w-full"/>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;
