"use client"

const Expertise = () => {
    const points = [
        "Experience And Expertise",
        "Experience And Expertise",
        "Experience And Expertise",
        "Experience And Expertise"
    ];

    return (
        <section className="w-full py-12 md:py-24 bg-[#F4F9FA]">
            <div className="max-w-5xl mx-auto px-6">

                {/* 1. Top Content */}
                <div className="mb-6 md:mb-6 space-y-3">
                    <p className="text-[#3D7A84] font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                        About Us
                    </p>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-linear-to-b from-[#2B4B80] to-[#2C7C85] bg-clip-text text-transparent leading-tight max-w-3xl">
                        There Is A Better Way To Manage Your Members
                    </h2>
                </div>
                {/* Responsive Tabs */}
                <div className="w-full mb-5">
                    <div className="flex gap-6 md:gap-8 flex-wrap">
                        {["Customer", "Individual", "Memberships", "Subscriptions"].map((tab) => (
                            <div
                                key={tab}
                                className="font-bold text-sm md:text-base text-black pb-3 cursor-default"
                            >
                                {tab}
                                <div className="border border-black" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Grid Container (Image & Details) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left: Single Image */}
                    <div className="relative w-full flex justify-center lg:justify-start order-2 lg:order-1">

                        <div className="relative z-10 w-full">
                            <img
                                src="/home/DoubleDesktop.png"
                                alt="Membership Console Dashboards"
                                className="w-full h-auto drop-shadow-2xl rounded-2xl"
                            />
                        </div>
                    </div>
                    {/* Right: Tabs & Expertise List */}
                    <div className="w-full space-y-8 order-1 lg:order-2">
                        {/* Expertise List (2x2 Grid on Tablet/Desktop for better space usage) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-6">
                            {points.map((p, i) => (
                                <div key={i} className=" pb-4">
                                    <h4 className="font-bold text-[#1A3152] text-lg">
                                        {p}
                                        <div className="border border-black" />
                                    </h4>
                                    <p className="text-gray-400 text-sm italic mt-1 font-medium">
                                        Lorem ipsum is placeholder text commonly used in the graphic
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}

export default Expertise;