import Hero from "@/components/sections/HeroSection";
import Navbar from "@/components/layout/Navbar";
import MembershipConsole from "@/components/sections/MembershipConsole";
import MissionValues from "@/components/sections/MissionValues";
import MemberShipPicture from "@/components/sections/MemberShipPic";
import Footer from "@/components/layout/Footer";
// import Features from "../components/sections/Features";

const LandingPage = () => {
    return (
        <div className="relative w-full">
            {/* Navbar */}
            <Navbar />
            <main>
                <Hero />
                <MembershipConsole />
                <MissionValues />
                <MemberShipPicture />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;