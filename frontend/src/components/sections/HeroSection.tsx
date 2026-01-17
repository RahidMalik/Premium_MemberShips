"use client"

const Hero = () => {
    return (
        <section className="relative w-full min-h-125 flex items-center justify-center px-4 sm:px-6 lg:px-8 py- bg-linear-to-br from-[#2c7c85] to-[#48598D]">
            {/* Grid  */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">

                {/* Div 1: Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-4xl text-white font-bold">
                        About Us
                    </h1>
                    <p className="mt-6 font-sans text-white/90 text-lg md:text-xl max-w-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis quaerat quis ipsum, officia modi?
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                        <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-[#2c7c85] transition-all">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Div 2: Image Content */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="/Group.png"
                        alt="Dashboard Mockup"
                        // Image size
                        className="w-full max-w-sm md:max-w-100 h-100 object-contain drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero