"use client"
import { Play } from "lucide-react"

const MemberShipPicture = () => {
    return (
        <section className="w-full">
            <div className="max-w-full mx-auto">

                {/* 1. Video Section Card */}
                <div className="bg-[#1f9fad] p-8 md:p-16 relative overflow-hidden">
                    <div className="relative z-10 text-center">
                        {/* Video Thumbnail Container */}
                        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                            <img
                                src="/ContentSectionV1.png"
                                alt="ContentSectionV1.png"
                                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1E3A8A] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                    <Play className="text-white fill-white w-8 h-8 md:w-10 md:h-10 ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. "You still have a question?" CTA Bar */}
                <div className=" bg-[#2C7C85] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                    {/* Background Hexagon Pattern (Optional) */}
                    <div className="absolute right-0 top-0 opacity-10">
                        {/* Aap yahan hexagon icon ya image dal sakte hain */}
                    </div>

                    <div className="text-center md:text-left space-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            You still have a question?
                        </h3>
                        <p className="text-white/80 text-sm md:text-base">
                            if you cannot find your answer in categories, you can always contact us. we will answer to you shortly
                        </p>
                    </div>

                    <button className="bg-white text-[#2C7C85] px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors shrink-0">
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>

    );
};

export default MemberShipPicture;