"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const FeatureCards = () => {
    return (
        <section className="w-full py-10 bg-transparent">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((card) => (
                        <Card key={card} className="border-none shadow-2xl rounded-3xl overflow-hidden group">

                            <div className="bg-linear-to-b from-[#3D7A84] to-[#1A3152] p-8 pb-0 h-full flex flex-col justify-between rounded-3xl">
                                {/* Text Content (Top) */}
                                <div className="text-white space-y-4 mb-8">
                                    <h3 className="text-2xl font-bold">Lorem Ipsum</h3>
                                    <p className="text-sm opacity-90 leading-relaxed">
                                        Embark on your design adventure by initiating your project.
                                        Share your vision and set the stage for a bespoke design experience.
                                    </p>
                                </div>

                                {/* Image Section */}
                                <div className="flex justify-end">
                                    <div className="w-[85%] rounded-tl-2xl overflow-hidden shadow-2xl border-t border-l border-white/20 transform translate-y-2 group-hover:-translate-y-1 transition-transform duration-500">
                                        <img
                                            src="/desktop.png"
                                            alt="Dashboard"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Bottom Center Button */}
                <div className="mt-16 flex justify-center">
                    <Button
                        onClick={() => window.location.href = "/"}
                        className="bg-[#3D7A84] hover:bg-[#2F5F67] text-white px-10 py-6 rounded-full text-lg font-bold shadow-lg transition-all hover:scale-105"
                    >
                        Explore More
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default FeatureCards;