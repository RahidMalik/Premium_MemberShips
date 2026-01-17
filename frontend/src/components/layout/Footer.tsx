"use client"
const Footer = () => {
    const services = ["Service Name 01", "Service Name 01", "Service Name 01", "Service Name 01"]

    return (
        <footer className="w-full overflow-hidden bg-[#48598D] text-white py-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Main Grid: 4 Columns on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">

                    {/* Column 1: Company */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold border-b-2 border-white/20 pb-2 inline-block">
                            Company
                        </h4>
                        <ul className="space-y-4">
                            {services.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-white/80 hover:text-white cursor-pointer transition-colors">
                                    <span className="w-1.5 h-1.5 bg-white rounded-sm" /> {item}
                                </li>
                            ))}
                        </ul>
                        {/* Email Subscription Box */}
                        <div className="relative mt-8 group">
                            <div className="flex items-center bg-white/10 border border-white/30 rounded-lg p-1 focus-within:border-white transition-all">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="bg-transparent border-none outline-none px-4 py-2 w-full text-sm placeholder:text-white/50"
                                />
                                <button className="bg-[#2C7C85] hover:bg-[#246e6e] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Our Services */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold border-b-2 border-white/20 pb-2 inline-block">
                            Our Services
                        </h4>
                        <ul className="space-y-4">
                            {services.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-white/80 hover:text-white cursor-pointer transition-colors">
                                    <span className="w-1.5 h-1.5 bg-white rounded-sm" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Text Content & Email Input */}
                    <div className="space-y-6 lg:col-span-1">
                        <h4 className="text-xl font-bold border-b-2 border-white/20 pb-2 inline-block">
                            MC Membership Management
                        </h4>
                        <p className="text-sm text-white/80 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>


                    </div>

                    {/* Column 4: Large Animated Logo Branding */}
                    <div className="flex justify-center lg:justify-end items-center h-full">
                        <div className="relative w-48 h-48 md:w-56 md:h-56">
                            {/* Outer Decorative Dots/Circles */}
                            <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-4 border border-dotted border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                            {/* Center MC Logo */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 bg-linear-to-br from-[#2C7C85] to-[#48598D] rounded-full border-2 border-white/40 flex items-center justify-center shadow-2xl">
                                    <img src="/Logo.png" alt="Logo" />
                                </div>
                            </div>

                            {/* Floating white dots (Decoration) */}
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-40"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        transform: `rotate(${i * 45}deg) translate(80px)`
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer