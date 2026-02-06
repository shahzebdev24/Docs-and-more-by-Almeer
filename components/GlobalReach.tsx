"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const countries = [
    { name: "Saudi Arabia", code: "sa" },
    { name: "United Arab Emirates", code: "ae" },
    { name: "Qatar", code: "qa" },
    { name: "Oman", code: "om" },
    { name: "Kuwait", code: "kw" },
    { name: "Bahrain", code: "bh" },
    { name: "United Kingdom", code: "gb" },
    { name: "United States", code: "us" },
    { name: "Canada", code: "ca" },
    { name: "Australia", code: "au" },
    { name: "Germany", code: "de" },
    { name: "France", code: "fr" },
    { name: "Italy", code: "it" },
    { name: "Spain", code: "es" },
    { name: "Netherlands", code: "nl" },
    { name: "Belgium", code: "be" },
    { name: "Switzerland", code: "ch" },
    { name: "Austria", code: "at" },
    { name: "Sweden", code: "se" },
    { name: "Norway", code: "no" },
    { name: "Denmark", code: "dk" },
    { name: "Finland", code: "fi" },
    { name: "Poland", code: "pl" },
    { name: "Turkey", code: "tr" },
    { name: "Malaysia", code: "my" },
    { name: "Singapore", code: "sg" },
    { name: "China", code: "cn" },
    { name: "Japan", code: "jp" },
    { name: "South Korea", code: "kr" },
    { name: "New Zealand", code: "nz" },
];

export default function GlobalReach() {
    // Duplicate the array for seamless infinite scroll
    const duplicatedCountries = [...countries, ...countries];

    return (
        <section className="py-16 md:py-32 pb-24 md:pb-40 bg-[#00383C] relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#B87333]/10 rounded-full blur-[100px] -ml-48 -mt-48"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#006A70]/10 rounded-full blur-[100px] -mr-48 -mb-48"></div>

            <div className="mx-auto w-[90%] md:w-[70%] relative z-10 mb-12 md:mb-16 text-center px-4">
                <span className="text-[#B87333] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-3 md:mb-4 block">
                    Global Presence
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6 tracking-tighter uppercase italic">
                    Trusted <span className="text-[#B87333] not-italic">Worldwide</span>
                </h2>
                <p className="text-base md:text-xl text-white/70 font-medium max-w-3xl mx-auto">
                    Our attestation services are recognized and accepted by embassies and authorities across 100+ countries
                </p>
            </div>

            {/* Scrolling Countries Container */}
            <div className="relative">
                <div className="overflow-hidden py-6 md:py-8">
                    <motion.div
                        className="flex gap-6 md:gap-10"
                        animate={{
                            x: [0, -50 * countries.length],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedCountries.map((country, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-[30px] px-5 md:px-8 py-4 md:py-6 hover:bg-white/10 transition-all group"
                                style={{ minWidth: "240px" }}
                            >
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 border-white/20 group-hover:border-[#B87333] transition-all">
                                        <img 
                                            src={`https://flagcdn.com/w80/${country.code}.png`}
                                            alt={`${country.name} flag`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-white font-black text-sm md:text-lg uppercase tracking-tight leading-tight">
                                            {country.name}
                                        </h3>
                                        <p className="text-[#B87333] text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">
                                            Embassy Recognized
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Gradient overlays for fade effect */}
                <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#00383C] to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#00383C] to-transparent pointer-events-none"></div>
            </div>

            {/* Stats below */}
            <div className="mx-auto w-[90%] md:w-[70%] mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center px-4">
                <div>
                    <div className="text-3xl md:text-4xl font-black text-[#B87333] mb-2">100+</div>
                    <div className="text-xs md:text-sm text-white/60 font-bold uppercase tracking-wider md:tracking-widest">Countries Served</div>
                </div>
                <div>
                    <div className="text-3xl md:text-4xl font-black text-[#B87333] mb-2">50+</div>
                    <div className="text-xs md:text-sm text-white/60 font-bold uppercase tracking-wider md:tracking-widest">Embassy Partners</div>
                </div>
                <div>
                    <div className="text-3xl md:text-4xl font-black text-[#B87333] mb-2">24/7</div>
                    <div className="text-xs md:text-sm text-white/60 font-bold uppercase tracking-wider md:tracking-widest">Global Support</div>
                </div>
                <div>
                    <div className="text-3xl md:text-4xl font-black text-[#B87333] mb-2">150k+</div>
                    <div className="text-xs md:text-sm text-white/60 font-bold uppercase tracking-wider md:tracking-widest">Happy Clients</div>
                </div>
            </div>
        </section>
    );
}
