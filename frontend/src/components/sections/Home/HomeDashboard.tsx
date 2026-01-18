"use client"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const HomeSection = () => {
    return (
        <section className="w-full pt-32 pb-20 bg-linear-to-br from-[#2C7C85] via-[#2C7C85] to-[#1E3A8A] relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-6 text-center relative z-10">

                {/* Top Small Heading */}
                <p className="text-white/80 text-sm font-medium mb-4 tracking-wide uppercase">
                    Membership Management Software
                </p>

                {/* Main Heading */}
                <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-6 leading-tight max-w-2xl mx-auto">
                    Membership Software That Just Works
                </h1>

                {/* Subtext */}
                <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>

                {/* CTA Button */}
                <Button
                    onClick={() => window.location.href = "/login"}
                    className="bg-white text-[#2C7C85] hover:bg-slate-100 px-10 py-7 rounded-full text-lg font-bold shadow-xl transition-all hover:scale-105 mb-10">
                    Get Started
                </Button>

                {/* Rating Section */}
                <div className="flex flex-col items-center gap-2 mb-16">
                    <div className="flex items-center text-[10px] md:text-lg lg:text-2xl gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={20} className="fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-white text-sm md:text-lg ml-2">4.7/5</span>
                        <p className="text-white ml-2 text-[13px] md:text-lg font-bold">G2 Reviews</p>
                    </div>
                </div>
                <div className="relative max-w-4xl mx-auto">
                    {/* Decorative White Stars*/}
                    <div className="absolute -top-12 -left-4 md:-top-20 md:-left-6 text-white/30">
                        <img src="/home/Burst-star.png"
                            alt=""
                            className="h-16 w-16 md:h-20 md:w-20"
                        />
                    </div>
                    <div className="absolute -bottom-15 -right-4 md:-bottom-12 md:-right-6 text-white/30">
                        <img src="/home/Burst-star.png"
                            alt=""
                            className="h-10 w-10 md:h-15 md:w-15"
                        />
                    </div>

                    <div className="p-4 rounded-[40px] ">
                        <img
                            src="/home/HomePageDashboard.png"
                            alt="Membership Management Dashboard"
                            className="w-full h-auto rounded-[30px]"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomeSection;