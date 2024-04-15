import React from 'react'
import tesla_logo from '../../assets/images/logos/tesla.png'
import meta_logo from '../../assets/images/logos/meta.png'
import microsoft_logo from '../../assets/images/logos/microsoft.png'
import amazon_logo from '../../assets/images/logos/amazon.png'
import datadog_logo from '../../assets/images/logos/datadog.png'
import tiktok_logo from '../../assets/images/logos/tiktok.png'
import google_logo from '../../assets/images/logos/google.png'
import coinbase_logo from '../../assets/images/logos/coinbase.png'
import roblox_logo from '../../assets/images/logos/roblox.png'
import palantir_logo from '../../assets/images/logos/palantir2.png'
import snowflake_logo from '../../assets/images/logos/snowflake2.png'
import bloomberg from '../../assets/images/logos/bloomberg.png'
import calabasasCountryClubHomePhoto from '../../assets/images/calabasas-country-club-home-photo.jpg'

const Home: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="rounded-sm h-screen">
                {/*<div */}
                <div className="relative w-screen h-1/2">
                    <div className="w-full h-full absolute top-0 left-0">
                        <img
                            className="w-full h-full"
                            src={calabasasCountryClubHomePhoto}
                        />
                    </div>
                    <div className="z-10 absolute top-0 left-0 w-full h-full">
                        <div className="bg-gradient-botleft-to-topright from-[#C1DDCC] via-[#C1DDCC] via-[#C1DDCC] to-[#C1DDCC]/30 w-full h-full"></div>
                    </div>
                </div>
                <div className=" bg-[#C1DDCC] relative flex flex-col items-center justify-center  text-center p-4 h-1/2">
                    <h1 className="text-6xl sm:text-5xl md:text-6xl text-white font-semibold mb-4">
                        CS Country Club
                    </h1>
                    <h4 className="text-6xl sm:text-5xl md:text-6xl  text-white font-semibold ">
                        The Best for the Best
                    </h4>
                </div>
                <div className="bg-white/10 text-3xl h-1/2 flex flex-col items-center justify-center">
                    <h1>
                        {' '}
                        Join an active community with members from top companies{' '}
                    </h1>

                    <div className="flex flex-row items-center justify-center gap-4">
                        <div className="h-26 w-32 p-2">
                            <img
                                src={meta_logo}
                                className="object-cover object-center h-full w-full"
                            />
                        </div>
                        <div className="h-26 w-32 p-2">
                            <img
                                src={tesla_logo}
                                className="object-cover object-center h-full w-full"
                            />
                        </div>
                        <div className="h-26 w-32 p-2">
                            <img
                                src={microsoft_logo}
                                className="object-cover object-center h-full w-full"
                            />
                        </div>
                        <div className="h-26 w-32 p-4">
                            <img
                                src={amazon_logo}
                                className="object-cover object-center h-full w-full"
                            />
                        </div>
                        <div className="h-26 w-32 p-2">
                            <img
                                src={datadog_logo}
                                className="object-cover object-center h-full w-full"
                            />
                        </div>
                        <div className="h-26 w-32 p-2">
                            <img
                                src={tiktok_logo}
                                className="object-cover object-center h-full w-full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4">
                        <div className="h-26 w-32 p-2">
                            <img
                                src={google_logo}
                                className="object-cover object-center h-full w-full"
                            />
                        </div>
                        <div className="h-26 w-32 p-2">
                            <img
                                src={coinbase_logo}
                                className="object-cover object-center h-full w-full"
                            />
                        </div>

                        <div className="h-26 w-32 p-2">
                            <img
                                src={roblox_logo}
                                className="object-cover object-center h-full w-full"
                            />
                        </div>

                        <div className="h-26 w-32 p-2">
                            <img
                                src={palantir_logo}
                                className="object-cover object-center h-full w-full"
                            />
                        </div>

                        <div className="h-26 w-32 p-2 ">
                            <img
                                src={snowflake_logo}
                                className="object-cover object-center h-full w-full"
                            />
                        </div>

                        <div className="h-26 w-32 p-4">
                            <img
                                src={bloomberg}
                                className="object-cover object-center h-full w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://cdn.tailwindcss.com/3.3.2"></script>
        </div>
    )
}

export default Home
