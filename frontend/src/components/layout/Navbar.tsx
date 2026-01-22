"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Our Features", href: "/features" },
        { name: "Contact Us", href: "/contact" },
    ]
    const navigate = useNavigate();
    const Login = () => {
        navigate("/login")
    }
    const Register = () => {
        navigate("/register")
    }
    return (
        // 1. Navbar
        <nav className={`w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 
            ${isOpen ? "relative" : "sticky top-0"} 
            md:sticky md:top-0`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* 1. Logo */}
                    <div className="shrink-0 lg:ml-10 flex items-center gap-2">
                        <img src={"/Logo.png"} alt="Logo" className="w-15 h-15 rounded-full" />
                    </div>

                    {/* 2. Desktop Links */}
                    <div className="hidden md:flex lg:ml-40 items-center gap-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-600 hover:text-[#2D8B8B] font-medium transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* 3. Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button onClick={Login} className="bg-[#2D8B8B] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#246e6e] transition-all shadow-md md:text-sm">Login</button>
                        <button onClick={Register} className="bg-[#2D8B8B] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#246e6e] transition-all shadow-md md:text-sm">
                            Start Free Trial
                        </button>
                    </div>

                    {/* 4. Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 5. Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white/80 backdrop-blur-md border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 p-4">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-lg font-medium py-2 border-b border-gray-50">
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex flex-col gap-3 pt-4 pb-4">
                                <button onClick={Login} className="bg-[#2D8B8B] text-white px-6 py-2.5 rounded-xl hover:bg-[#246e6e] transition-all shadow-md font-bold">Login</button>
                                <button onClick={Register} className="bg-[#2D8B8B] text-white px-6 py-2.5 rounded-xl hover:bg-[#246e6e] transition-all shadow-md font-bold">Start Free Trial</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar