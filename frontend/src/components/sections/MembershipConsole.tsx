"use client"
const AboutMembership = () => {

    // Logos ka data (Aap apni images replace kar lena)
    const companies = [
        { name: "Netflix", logo: "/Netflix.png" },
        { name: "Stripe", logo: "/stripe.png" },
        { name: "Framer", logo: "/framer.png" },
        { name: "HubSpot", logo: "/hubspot.png" },
        { name: "Dropbox", logo: "/dropbox.png" },
        { name: "Buffer", logo: "/Buffer.png" },
    ]

    return (
        <section className="relative w-full py-20 bg-white overflow-hidden">
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {/* wavy line  */}
                <img
                    src="/waveLines.png"
                    alt="Background Pattern"
                    className="w-full h-115 object-cover opacity-15"
                />

            </div>
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {/* wavy line  */}
                <img
                    src="/wavytwo.png"
                    alt="Background Pattern"
                    className="w-full h-110 object-cover opacity-15"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

                {/* 2. Heading */}
                <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-t from-[#2B4B80] to-[#2C7C85] bg-clip-text text-transparent mb-8">
                    About Membership Console
                </h2>

                {/* 3. Paragraphs */}
                <div className="space-y-6 text-gray-600 text-sm md:text-base font-sans leading-relaxed max-w-4xl mx-auto">
                    <p>
                        DocHyve stands as a prominent leader in the realm of urgent care and occupational medical services, holding a substantial presence with over
                        170 clinics spread across Arizona, Colorado, Kansas, Michigan, Missouri, Nebraska, New Mexico, North Carolina, Oklahoma, Texas, Virginia, and
                        Wyoming. Our commitment lies in delivering outstanding and cost-effective healthcare to patients nationwide.
                    </p>
                    <p>
                        At DocHyve, our portfolio includes one primary care facility and three distinct urgent care brands, each tailored to meet the diverse needs of our
                        community. We continually strive to broaden our family of brands, ensuring that our reach extends even further to provide accessible and
                        quality care. To learn more about DocHyve and our healthcare services, please explore further details on our website.
                    </p>
                </div>

                {/* 4. Logos Section */}
                <div className="mt-16 flex flex-wrap justify-center font-sans items-center gap-8 md:gap-16">
                    {companies.map((company, index) => (
                        <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                            <img src={company.logo} alt={company.name} className="h-6 md:h-6 w-auto object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutMembership