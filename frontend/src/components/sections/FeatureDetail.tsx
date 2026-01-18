"use client"

import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import FeatureDetail from "./FeaturesName"


const Features = () => {
    return (
        <>
            <Navbar />
            <section className="relative w-full min-h-100 flex items-center justify-center pl-4 sm:pl-6 lg:pl-8 py-0 bg-linear-to-br from-[#2c7c85] to-[#2B3674]">
                {/* Grid  */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full pb-0">

                    {/* Div 1: Text Content */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-sm mb-4 ml-1 text-white font-bold">
                            Home / Features / Feature Name
                        </h3>
                        <h1 className="text-4xl text-white font-bold">
                            Feature Name
                        </h1>
                        <p className="mt-6 font-sans text-white/90 text-lg md:text-xl max-w-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatibus?
                        </p>
                    </div>

                    {/* Div 2: Image Content */}
                    <div className="flex justify-center items-center">
                        <img
                            src="/desktop.png"
                            alt="Dashboard Mockup"
                            className="w-full max-w-sm md:max-w-100 h-auto object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </section>
            <FeatureDetail />
            <Footer />
        </>
    )
}

export default Features;