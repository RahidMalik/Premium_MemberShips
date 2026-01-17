"use client"

const MissionValues = () => {
    return (
        <section className="w-full py-10 bg-[#F4F9FA]">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 space-y-24">

                {/* 1. Our Mission - Text Left, Image Right */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <div className="flex-1 space-y-4">
                        <h3 className="text-lg md:text-2xl font-bold bg-linear-to-t from-[#2B4B80] to-[#2C7C85] bg-clip-text text-transparent mb-8">
                            Our Mission
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            Granting patients the capability to observe and select empowers them.
                            By doing this we can align healthcare with typical consumer sectors,
                            where enterprises vie for customers rather than the reverse.
                            Over time, this approach will elevate quality and reduce costs.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img
                            src="/Mission.png"
                            alt="Our Mission"
                            className="w-full max-w-sm h-auto object-contain"
                        />
                    </div>
                </div>

                {/* 2. Our Values - Image Left, Text Right (order-last logic for responsive) */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <div className="flex-1 flex justify-center order-last md:order-first">
                        <img
                            src="/MissionTwo.png"
                            alt="Our Values"
                            className="w-full max-w-sm h-auto object-contain"
                        />
                    </div>
                    <div className="flex-1 space-y-4">
                        <h3 className="text-lg md:text-2xl font-bold bg-linear-to-t from-[#2B4B80] to-[#2C7C85] bg-clip-text text-transparent mb-8">
                            Our Values
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            We assist millions of individuals in discovering and scheduling
                            appointments with healthcare providers that align with their needs.
                            Through DocHyve, users can select from in-network providers, those
                            with high ratings, specialists in particular fields, and those available
                            for immediate appointments.
                        </p>
                    </div>
                </div>

                {/* 1. Our Mission - Text Left, Image Right */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <div className="flex-1 space-y-4">
                        <h3 className="text-lg md:text-2xl font-bold bg-linear-to-t from-[#2B4B80] to-[#2C7C85] bg-clip-text text-transparent mb-8">
                            Our Expertise
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            Physicians didn't endure the ramen-filled days of residency to
                            transition into digital marketing experts. DocHyve facilitates
                            doctors in effortlessly connecting with the patients they aim to
                            assist, fostering the growth of their practices. This ensures
                            doctors can focus on practicing medicine, and patients can fully
                            engage in their healthcare journey.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img
                            src="/MissionThree.png"
                            alt="Our Expertise"
                            className="w-full max-w-sm h-auto object-contain"
                        />
                    </div>
                </div>

                {/* 2. Our Values - Image Left, Text Right*/}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <div className="flex-1 flex justify-center order-last md:order-first">
                        <img
                            src="/MissionFour.png"
                            alt="Our Vision"
                            className="w-full max-w-sm h-auto object-contain"
                        />
                    </div>
                    <div className="flex-1 space-y-4">
                        <h3 className="text-lg md:text-2xl font-bold bg-linear-to-t from-[#2B4B80] to-[#2C7C85] bg-clip-text text-transparent mb-8">
                            Our Vision
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            A space where every category of patient can discover a broad
                            spectrum of healthcare. A venue where they can explore
                            comprehensive healthcare providers and treatment alternatives,
                            accompanied by details on cost and quality. A setting where
                            they can select from a competitive marketplace eager to cater
                            to their needs. A platform where patients can securely maintain
                            and review their complete medical history. A location where
                            they can engage with their team of healthcare professionals,
                            including doctors and nurses.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MissionValues;