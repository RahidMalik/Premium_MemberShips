import { LayoutDashboard, CreditCard, Users, Star, Rocket } from "lucide-react";
import { useState } from "react";

const SidebarMenu = () => {
    const [active, setActive] = useState("Dashboard");

    const menuItems = [
        { name: "Dashboard", icon: <LayoutDashboard size={20} /> },
        { name: "Subscriptions", icon: <CreditCard size={20} /> },
        { name: "Memberships", icon: <Users size={20} /> },
        { name: "Membership Console", icon: <Star size={20} /> },
    ];

    return (
        <div className="flex flex-col h-screen w-64 bg-[#2D7A7B] text-white p-5 shadow-xl">
            {/* Logo Section */}
            <div className="flex justify-center mb-10">
                <div className="rounded-full border-2 border-[#224855] bg-[#224855] flex items-center justify-center overflow-hidden shadow-lg">
                    <img src="/Logo.png" alt="MC Logo" className="w-24 h-24 object-contain" />
                </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 space-y-2">
                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => setActive(item.name)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-semibold text-sm ${active === item.name
                            ? "bg-white text-[#224855] shadow-md"
                            : "hover:bg-[#246162] text-white/90"
                            }`}
                    >
                        {item.icon}
                        {item.name}
                    </button>
                ))}
            </nav>

            {/* Upgrade Card (Rocket Section) */}
            <div className="bg-white rounded-2xl p-5 text-center mt-auto shadow-inner">
                <div className="flex justify-center mb-2">
                    {/* Rocket Illustration Placeholder */}
                    <div className="relative">
                        <Rocket className="text-[#8B5CF6] animate-bounce" size={40} />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                </div>
                <h3 className="text-[#224855] font-bold text-sm mb-3">Want to upgrade?</h3>
                <button className="w-full bg-[#348081] text-white py-2 rounded-full text-xs font-bold hover:bg-[#2D7A7B] transition-colors shadow-md">
                    Upgrade now
                </button>
            </div>
        </div>
    );
};

export default SidebarMenu;