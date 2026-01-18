"use client"

import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const PricingSection = () => {
    const plans = [
        { name: "Free Plan", price: "100", isHighlighted: false },
        { name: "Professional", price: "300", isHighlighted: true },
        { name: "Professional", price: "400", isHighlighted: false }
    ]

    return (
        <section className="w-full bg-linear-to-br from-[#FBFBFB30] to-[#24988F45] py-24 bg-[#F4F9FA] relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h4 className="text-[#3D7A84] font-bold text-sm tracking-widest uppercase">Plans Pricing</h4>
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1A3152]">Choose What Suits You Best</h2>
                    <p>
                        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without Lorem ipsum is a placeholder text commonly used to demonstrate the visual.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`rounded-[32px] border-none transition-all duration-500 hover:shadow-xl ${plan.isHighlighted
                                ? 'bg-[#2D7C85] text-white scale-105 md:scale-110 shadow-2xl py-8'
                                : 'bg-white text-[#1A3152] shadow-sm'
                                }`}
                        >
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                <CardDescription className={`${plan.isHighlighted ? 'text-white/70' : 'text-gray-400'}`}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-5xl font-bold">${plan.price}</span>
                                    <span className="text-sm opacity-70">/ Month</span>
                                </div>

                                <Button
                                    className={`w-full rounded-full h-12 font-bold ${plan.isHighlighted
                                        ? 'bg-white text-[#2D7C85] hover:bg-gray-100'
                                        : 'bg-[#2D7C85] text-white hover:bg-[#23636a]'
                                        }`}
                                >
                                    Get Started Now
                                </Button>

                                <div className="mt-8 space-y-4">
                                    {Array(8).fill(0).map((_, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className={`rounded-full p-1 ${plan.isHighlighted ? 'bg-white/20' : 'bg-gray-100'}`}>
                                                <Check size={12} className={plan.isHighlighted ? 'text-white' : 'text-[#2D7C85]'} />
                                            </div>
                                            <span className="text-sm opacity-90">Lorem ipsum dolor sit consectetur</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricingSection