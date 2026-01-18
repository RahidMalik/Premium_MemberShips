"use client"
import React from 'react'

const EverythingEverywhere = () => {
    const brands = [
        { name: "Brewing Co", logo: "/home/image6.png" },
        { name: "YouTube", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" },
        { name: "Fitness Center", logo: "/home/f1.png" },
        { name: "Bodybuilding", logo: "/home/gymlogo.png" }
    ];

    return (
        <section className="w-full relative">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-125">
                {/* Left Box: EVERYTHING */}
                <div className="bg-[#2D7C85] py-24 px-10 flex flex-col items-center justify-center text-center">
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-10">
                        Everything
                    </h3>
                    <div className="p-4 w-full max-w-md transition-transform duration-500">
                        <img
                            src="/home/DoubleDesktop.png"
                            alt="Dashboard Preview"
                            className="rounded-[30px] w-full h-auto shadow-2xl"
                        />
                    </div>
                </div>

                {/* Right Box: EVERYWHERE */}
                <div className="bg-[#4F649B] py-24 px-10 flex flex-col items-center justify-center text-center">
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-10">
                        Everywhere
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4 w-full max-w-lg">
                        {brands.map((brand, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 md:p-6 rounded-[24px] shadow-2xl flex items-center justify-center w-24 h-24 md:w-32 md:h-32 transition-all duration-300 hover:scale-110 border border-white/20"
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 pointer-events-none hidden md:block">
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-[0.2em] drop-shadow-lg whitespace-nowrap ">
                    All At Once
                </h3>
            </div>

            {/* Mobile Only: Text below boxes for better readability */}
            <div className="w-full bg-[#4F649B] py-6 text-center md:hidden">
                <h3 className="text-2xl font-black text-white uppercase tracking-[0.2em] ">
                    All At Once
                </h3>
            </div>
        </section>
    )
}

export default EverythingEverywhere