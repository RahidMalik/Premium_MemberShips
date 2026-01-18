import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeSection from "@/components/sections/Home/HomeDashboard";
import Expertise from "@/components/sections/Home/Expertise";
import WhyChooseUs from "@/components/sections/Home/WhyChooseUs";
import FeaturesSection from "@/components/sections/Home/FeaturesSection";
import EverythingEverywhere from "@/components/sections/Home/EverythingEverywhere";
import PricingSection from "@/components/sections/Home/PricingSection";
// import Features from "../components/sections/Features";

const LandingPage = () => {
    return (
        <div className="relative w-full">
            {/* Navbar */}
            <Navbar />
            <main>
                {/* LandingPage */}
                <HomeSection />
                <Expertise />
                <WhyChooseUs />
                <FeaturesSection />
                <EverythingEverywhere />
                <PricingSection />
            </main>
            {/* Footer  */}
            <Footer />
        </div>
    );
};

export default LandingPage;