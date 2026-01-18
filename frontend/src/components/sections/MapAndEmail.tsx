"use client"
import { Mail, MessageCircle, Phone, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const ContactSection = () => {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">

                {/* 1. Heading Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2B4B80]">Get in Touch</h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>

                {/* 2. Contact Info Cards (Email, Chat, Call) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Email Card */}
                    <Card className="p-6 flex items-start gap-4 border-none shadow-sm bg-slate-50/50">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-[#2B4B80]">
                            <Mail size={24} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#2B4B80]">Email</h4>
                            <p className="text-xs text-gray-400">mail support at</p>
                            <p className="text-sm font-medium text-[#2C7C85]">support@MC</p>
                        </div>
                    </Card>

                    {/* Chat Card */}
                    <Card className="p-6 flex items-start gap-4 border-none shadow-sm bg-slate-50/50 relative">

                        <div className="p-3 bg-white rounded-xl shadow-sm text-[#2B4B80]">
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#2B4B80]">Chat</h4>
                            <p className="text-xs text-gray-400">You can chat</p>
                            <p className="text-sm font-medium">directly with Us!</p>
                        </div>
                        <Send size={14} className="absolute top-4 right-4 text-gray-400" />
                    </Card>

                    {/* Call Card */}
                    <Card className="p-6 flex items-start gap-4 border-none shadow-sm bg-slate-50/50">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-[#2B4B80]">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#2B4B80]">Call</h4>
                            <p className="text-xs text-gray-400">Call us now!</p>
                            <p className="text-sm font-medium text-[#2C7C85]">+xxx-xxx-xxxxx</p>
                        </div>
                    </Card>
                </div>

                {/* 3. Main Form & Map Container */}
                <div className="bg-white rounded-3xl p-4 md:p-8 shadow-[0_0_50px_-12px_#2c7c85] border border-[#2c7c85] grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Left Side: Map Placeholder */}
                    <div className="w-full h-100 lg:h-auto rounded-2xl overflow-hidden bg-slate-100 relative">
                        {/* Google Map */}
                        <img
                            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
                            alt="Map Placeholder"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-[#2B4B80]/10" />
                    </div>

                    {/* Right Side: Shadcn Form */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                            <Input placeholder="Enter your full name" className="h-12 bg-slate-50/30 border-gray-200 focus-visible:ring-[#2C7C85]" />
                            <Input placeholder="Enter your phone number (optional)" className="h-12 bg-slate-50/30 border-gray-200 focus-visible:ring-[#2C7C85]" />
                            <Input placeholder="Enter your email" type="email" className="h-12 bg-slate-50/30 border-gray-200 focus-visible:ring-[#2C7C85]" />
                            <Input placeholder="Subject" className="h-12 bg-slate-50/30 border-gray-200 focus-visible:ring-[#2C7C85]" />
                        </div>
                        <Textarea
                            placeholder="Your message"
                            className="min-h-37.5 bg-slate-50/30 border-gray-200 focus-visible:ring-[#2C7C85]"
                        />
                        <Button className="w-full h-12 bg-[#2C7C85] hover:bg-[#246e6e] text-white font-bold rounded-lg transition-all shadow-md">
                            Send message
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactSection