"use client"

import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import ContactSection from "./MapAndEmail"

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <section className="relative w-full min-h-100 flex items-end justify-center pl-4 sm:pl-6 lg:pl-8 py-0 bg-linear-to-br from-[#2c7c85] to-[#2B3674]">
                {/* Grid  */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full pb-0">

                    {/* Div 1: Text Content */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-lg mb-4 ml-1 text-white font-bold">
                            Contact Us
                        </h3>
                        <h1 className="text-4xl text-white font-bold">
                            Get In Touch
                        </h1>
                        <p className="mt-6 font-sans text-white/90 text-lg md:text-xl max-w-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis quaerat quis ipsum, officia modi?
                        </p>
                    </div>

                    {/* Div 2: Image Content */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="/Frame.png"
                            alt="Dashboard Mockup"
                            className="w-full max-w-sm md:max-w-100 h-auto object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </section>
            <ContactSection />
            <Footer />
        </>
    )
}

export default ContactUs