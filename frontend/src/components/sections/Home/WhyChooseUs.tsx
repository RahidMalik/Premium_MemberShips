"use client"
import { Badge } from "@/components/ui/badge"

const WhyChooseUs = () => {
    const features = [
        {
            title: "Empower artist growth",
            badge: "Artist Development",
            desc: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",
            image: "/home/HomeOne.png",
            reverse: false
        },
        {
            title: "Empower artist growth",
            badge: "Artist Development",
            desc: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",
            image: "/home/HomeTwo.png",
            reverse: true
        },
        {
            title: "Empower artist growth",
            badge: "Artist Development",
            desc: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",
            image: "/home/HomeThree.png",
            reverse: false
        }
    ]

    return (
        <section className="w-full py-20 bg-[#F4F9FA]">
            <div className="max-w-4xl mx-auto px-6">

                {/* Heading Section */}
                <div className="text-center mb-20 space-y-4">
                    <p className="text-[#3D7A84] font-bold text-md uppercase tracking-widest">Why Choose Us</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A3152] max-w-4xl mx-auto leading-tight">
                        What Makes Us The Industry Leader For Membership Management?
                    </h2>
                </div>

                {/* Features Rows */}
                <div className="space-y-24">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-6">
                                <Badge className="bg-[#3D7A84] hover:bg-[#2F5F67] px-4 py-1.5 rounded-full font-medium text-xs transition-all duration-100">
                                    {item.badge}
                                </Badge>
                                <h3 className="text-3xl font-bold text-[#1A3152]">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Image Container with Soft Card Style */}
                            <div className="flex-1 w-full flex justify-center">
                                <div className="p-4 md:p-8 rounded-[40px] w-full max-w-125">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-auto rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs;