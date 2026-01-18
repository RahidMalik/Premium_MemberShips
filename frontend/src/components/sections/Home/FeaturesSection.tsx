"use client"
// import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const FeaturesSection = () => {
    const socialLogos = [
        { name: "Netflix", img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
        { name: "Youtube", img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" },
        { name: "Notion", img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
        { name: "Youtube", img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" },
        { name: "Netflix", img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    ]

    return (
        <div className="w-full">
            {/* --- Blue Logo Section --- */}
            <section className="w-full py-16 bg-[#4F649B] relative overflow-hidden">
                {/* Grid Background Effect */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Ready To Roll Out Digital Membership Cards?</h2>
                    <p className="text-white/70 max-w-3xl mx-auto mb-12 text-sm md:text-base">
                        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without meaningful content.
                    </p>

                    {/* Logo Cards */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {socialLogos.map((logo, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-xl w-32 md:w-40 flex flex-col items-center gap-3 transition-transform hover:-translate-y-2">
                                <img src={logo.img} alt={logo.name} className="h-8 md:h-10 object-contain" />
                                <span className="font-bold text-gray-800 text-sm">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- What Sets MC Apart Section --- */}
            <section className="w-full py-20 bg-[#F4F9FA]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-[#3D7A84] font-bold text-sm tracking-widest uppercase mb-2">Our Features</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1A3152] mb-4">What Sets MC Apart?</h2>
                        <p className="text-gray-500 max-w-3xl mx-auto">
                            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
                        </p>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                        {/* Big Left Card (Featured) */}
                        <div className="lg:col-span-5 rounded-[32px] p-8 text-white flex flex-col justify-between">
                            <div>
                                <div className="mb-6">
                                    <img src="/home/service -1.png" alt="Icon" className="w-full h-auto rounded-xl" />
                                </div>
                            </div>
                        </div>

                        {/* Right Cards Column */}
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                                {/* Small Card 1 */}
                                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1A3152] mb-3">Lorem Ipsum</h3>
                                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod.
                                        </p>
                                    </div>
                                    <button className="flex items-center gap-2 font-bold text-[#1A3152] hover:text-[#3D7A84] transition-colors">
                                        Learn More <ArrowRight size={18} />
                                    </button>
                                </div>

                                {/* Small Card 2 */}
                                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1A3152] mb-3">Lorem Ipsum</h3>
                                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod.
                                        </p>
                                    </div>
                                    <button className="flex items-center gap-2 font-bold text-[#1A3152] hover:text-[#3D7A84] transition-colors">
                                        Learn More <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Wide Bottom Card */}
                            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center">
                                <div className="max-w-md">
                                    <h3 className="text-xl font-bold text-[#1A3152] mb-3">Lorem Ipsum</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4 md:mb-0">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                                    </p>
                                </div>
                                <button className="flex items-center gap-2 font-bold text-[#1A3152] hover:text-[#3D7A84] transition-colors">
                                    Learn More <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Button className="bg-[#2C7C85] hover:bg-[#23636a] px-8 py-6 rounded-full font-bold">
                            Explore More Features
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturesSection