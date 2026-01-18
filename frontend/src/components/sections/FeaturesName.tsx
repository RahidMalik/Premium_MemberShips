"use client"
import { Rocket, Lightbulb, CheckCircle } from "lucide-react"
import FeatureCards from "./FeatureCards"

const FeatureDetail = () => {
    const steps = [
        {
            title: "Lorem Ipsum",
            desc: "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience",
            icon: <Rocket size={20} className="text-white" />,
        },
        {
            title: "Lorem Ipsum",
            desc: "Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space",
            icon: <Lightbulb size={20} className="text-white" />,
        },
        {
            title: "Lorem Ipsum",
            desc: "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space",
            icon: <CheckCircle size={20} className="text-white" />,
        }
    ]

    return (
        <>
            <section className="w-full pt-20 bg-white">
                <div className="max-w-3xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-12">
                        <h2 className="text-4xl font-bold text-black mb-12">Feature Name</h2>

                        <div className="relative">
                            {/* Vertical Progress Line */}
                            <div className="absolute left-5 top-4 bottom-4 w-[1.5px] bg-gray-200" />

                            <div className="space-y-16">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex items-start gap-8 relative">
                                        {/* Icon Circle */}
                                        <div className="w-10 h-10 rounded-full bg-[#3D7A84] flex items-center justify-center shrink-0 z-10 shadow-md">
                                            {step.icon}
                                        </div>
                                        {/* Content */}
                                        <div className="space-y-2">
                                            <h4 className="text-xl font-bold text-[#2B4B80]">{step.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <img
                            src="/FeaturesName.png"
                            alt="Process"
                            className="w-full h-auto rounded-[50px] shadow-2xl"
                        />
                    </div>
                </div>
            </section>
            <FeatureCards />
        </>
    )
}

export default FeatureDetail;