"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function DigitalClock() {
    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        setTime(new Date());
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    if (!time) return <div className="h-10 w-24 bg-gray-50/50 animate-pulse rounded-lg"></div>;

    return (
        <div className="flex flex-col items-end">
            <div className="text-xl font-black text-[#006A70] tabular-nums tracking-tight">
                {time.toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
            <div className="text-[8px] uppercase tracking-[0.2em] text-[#B87333] font-bold">
                Pakistan Time
            </div>
        </div>
    );
}

const services = [
    { name: "MOFA Attestation", href: "/services/mofa-attestation" },
    { name: "Apostille Attestation", href: "/services/apostille-attestation" },
    { name: "HEC Attestation", href: "/services/hec-attestation" },
    { name: "IBCC Attestation", href: "/services/ibcc-attestation" },
    { name: "EDO Attestation", href: "/services/edo-attestation" },
    { name: "Education Secretariat", href: "/services/education-secretariat" },
    { name: "Degree Issuance", href: "/services/university-degree-issuance" },
    { name: "BSEK (Matric) Karachi", href: "/services/karachi-board-services" },
    { name: "BIEK (Inter) Karachi", href: "/services/biek-karachi-services" },
    { name: "Nationwide Board Services", href: "/services/nationwide-board-services" },
    { name: "Embassy Attestation", href: "/services/embassy-attestation" },
    { name: "Translation Services", href: "/services/translation-services" },
    { name: "NADRA & Civil Documents", href: "/services/nadra-civil-documents" },
    { name: "Legal & Stamp Papers", href: "/services/legal-stamp-papers" },
    { name: "Visa Processing", href: "/services/visa-processing" },
    { name: "WES & ECA Services", href: "/services/wes-eca-services" },
    { name: "Vaccine Certificates", href: "/services/vaccine-certificates" },
    { name: "Pet Travel Services", href: "/services/pet-travel" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "#", hasDropdown: true },
        { name: "How It Works", href: "/how-it-works" },
        { name: "About Us", href: "/about-us" },
        { name: "Key Features", href: "/key-features" },
    ];

    return (
        <div className="w-full font-sans fixed top-0 left-0 z-50">
            {/* Top Logo Section - White Background (Hidden on Mobile) */}
            <div className="w-full hidden md:block bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="mx-auto w-[90%] md:w-[70%] py-0 flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link href="/" className="flex flex-col py-2 md:py-4 transition-all">
                            <span className="text-xl md:text-3xl font-black text-[#006A70] tracking-tighter uppercase leading-none">
                                Docs <span className="text-[#B87333]">&</span> More
                            </span>
                            <span className="text-[8px] md:text-xs font-bold text-gray-400 tracking-[0.3em] uppercase mt-1">
                                By Almeer
                            </span>
                        </Link>
                    </div>

                    {/* Right Side: Clock + Phone */}
                    <div className="hidden md:flex items-center gap-8">
                        <DigitalClock />
                        <a
                            href="tel:03122373233"
                            className="flex items-center gap-3 px-6 py-3 bg-[#FDFBF7] rounded-2xl border border-gray-100 hover:border-[#B87333] transition-all group"
                        >
                            <div className="w-10 h-10 bg-[#006A70] rounded-xl flex items-center justify-center group-hover:bg-[#B87333] transition-colors">
                                <Phone className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left">
                                <div className="text-[8px] uppercase tracking-widest text-gray-400 font-bold">Call Now</div>
                                <div className="text-sm font-black text-[#006A70] group-hover:text-[#B87333] transition-colors">0312-2373233</div>
                                <div className="text-sm font-black text-[#006A70] group-hover:text-[#B87333] transition-colors">0308-2838062</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Nav Section - Teal Background */}
            <div className="w-full bg-[#006A70]/90 backdrop-blur-md shadow-lg">
                <div className="mx-auto w-[90%] md:w-[70%] px-6 py-2 md:py-4 flex items-center justify-between text-white">
                    {/* Navigation Links */}
                    <div className="hidden lg:flex items-center gap-10 text-base font-bold">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            if (link.hasDropdown) {
                                return (
                                    <div
                                        key={link.name}
                                        className="relative group"
                                        onMouseEnter={() => setIsServicesOpen(true)}
                                        onMouseLeave={() => setIsServicesOpen(false)}
                                    >
                                        <button className={`flex items-center gap-1 transition-colors hover:text-[#B87333] uppercase tracking-wider ${isServicesOpen ? 'text-[#B87333]' : ''}`}>
                                            {link.name}
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {isServicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 15 }}
                                                    className="absolute top-full left-0 pt-4 w-72"
                                                >
                                                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 max-h-[500px] overflow-y-auto">
                                                        {services.map((service) => (
                                                            <Link
                                                                key={service.name}
                                                                href={service.href}
                                                                className="block px-6 py-3 text-sm text-[#006A70] font-bold hover:bg-[#FDFBF7] hover:text-[#B87333] transition-all border-b border-gray-50 last:border-0"
                                                            >
                                                                {service.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`transition-colors relative group uppercase tracking-wider ${isActive ? 'text-[#B87333]' : 'hover:text-[#B87333]'}`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#B87333] transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Contact Button */}
                    <div className="hidden md:block">
                        <a
                            href="https://wa.me/923122373233?text=Hello%2C%20I%20need%20help%20with%20document%20attestation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#B87333] text-white hover:bg-[#8D5A28] font-black text-sm px-8 py-3 rounded-full transition-all shadow-lg transform hover:scale-105 inline-block uppercase tracking-wider"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile: Logo (Left) + Menu (Right) */}
                    <div className="lg:hidden flex items-center justify-between w-full text-white">
                        <Link href="/" className="flex flex-col py-1">
                            <span className="text-lg font-black tracking-tighter uppercase leading-none">
                                Docs <span className="text-[#B87333]">&</span> More
                            </span>
                            <span className="text-[7px] font-bold text-white/70 tracking-[0.2em] uppercase">
                                By Almeer
                            </span>
                        </Link>
                        <button className="p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-6 py-8 space-y-6">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-xl font-bold text-[#006A70] block mb-2 uppercase tracking-wide"
                                        onClick={() => link.hasDropdown ? null : setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.hasDropdown && (
                                        <div className="pl-4 space-y-3 mt-4 border-l-2 border-[#B87333]/30">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    className="block text-sm font-semibold text-gray-600 hover:text-[#B87333]"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Mobile Contact */}
                            <div className="flex flex-col gap-2">
                                <a
                                    href="tel:03122373233"
                                    className="flex items-center gap-3 px-6 py-4 bg-[#FDFBF7] rounded-2xl border border-gray-100"
                                >
                                    <Phone className="w-5 h-5 text-[#B87333]" />
                                    <span className="font-black text-[#006A70]">0312-2373233</span>
                                </a>
                                <a
                                    href="tel:03082838062"
                                    className="flex items-center gap-3 px-6 py-4 bg-[#FDFBF7] rounded-2xl border border-gray-100"
                                >
                                    <Phone className="w-5 h-5 text-[#B87333]" />
                                    <span className="font-black text-[#006A70]">0308-2838062</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
