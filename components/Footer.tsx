"use client"
import Link from 'next/link';
import Image from 'next/image';
import {
    Facebook, Twitter, Instagram, Linkedin,
    Mail, Phone, MapPin, ArrowUpRight, ShieldCheck
} from 'lucide-react';

const serviceLinks = [
    { name: "MOFA Attestation", href: "/services/mofa-attestation" },
    { name: "Apostille Process", href: "/services/apostille-attestation" },
    { name: "HEC Verification", href: "/services/hec-attestation" },
    { name: "IBCC Support", href: "/services/ibcc-attestation" },
    { name: "Embassy Services", href: "/services/embassy-attestation" },
    { name: "Visa Processing", href: "/services/visa-processing" },
];

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="bg-[#00383C] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
            <div className="mx-auto w-[90%] md:w-[85%] lg:w-[75%]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 text-left">

                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="flex flex-col mb-8">
                            <span className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
                                Docs <span className="text-[#B87333]">&</span> More
                            </span>
                            <span className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase mt-1">
                                By Almeer
                            </span>
                        </Link>
                        <p className="text-[#FDFBF7]/70 text-base font-medium leading-relaxed mb-8 max-w-sm">
                            Pakistan's most trusted partner for document legalisation,
                            embassy attestation, and global mobility services. We handle your documents with precision and care.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#B87333] hover:border-[#B87333] transition-all group">
                                    <Icon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[#B87333] font-black text-sm uppercase tracking-[0.2em] mb-8">Our Services</h4>
                        <ul className="space-y-4">
                            {serviceLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-[#FDFBF7]/60 font-bold text-sm tracking-wide hover:text-[#B87333] flex items-center gap-2 transition-all">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#B87333]/30"></div>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick & Support Column */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[#B87333] font-black text-sm uppercase tracking-[0.2em] mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-[#FDFBF7]/60 font-bold text-sm tracking-wide hover:text-white transition-all flex items-center justify-between group">
                                        {link.name}
                                        <ArrowUpRight className="w-3 h-3 text-white/0 group-hover:text-[#B87333] transition-all group-hover:translate-x-1" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[#B87333] font-black text-sm uppercase tracking-[0.2em] mb-8">Get In Touch</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start group">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#B87333]/10 transition-colors">
                                    <Mail className="w-5 h-5 text-[#B87333]" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-black mb-1">Email Us</p>
                                    <p className="text-sm font-bold text-[#FDFBF7]/80">docsandmorebyalmeer@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#B87333]/10 transition-colors">
                                    <Phone className="w-5 h-5 text-[#B87333]" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-black mb-1">Call Us</p>
                                    <p className="text-sm font-bold text-[#FDFBF7]/80">0312-2373233</p>
                                    <p className="text-sm font-bold text-[#FDFBF7]/80">0308-2838062</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#B87333]/10 transition-colors">
                                    <MapPin className="w-5 h-5 text-[#B87333]" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-black mb-1">Visit Us</p>
                                    <p className="text-sm font-bold text-[#FDFBF7]/80">Office No. 6/7, S.M.C.H.S., Block-B, Shahrah-e-Faisal, Karachi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#B87333]/10 rounded-full flex items-center justify-center border border-[#B87333]/20">
                            <ShieldCheck className="w-5 h-5 text-[#B87333]" />
                        </div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-black">
                            Secure Document Handling Certified
                        </p>
                    </div>

                    <div className="flex flex-col md:items-end gap-1">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-bold">
                            © {new Date().getFullYear()} Docs & More by Almeer. Legal Partner Since 2010.
                        </p>
                        <p className="text-[9px] tracking-[0.1em] uppercase text-white/30 font-medium">
                            Developed by <a href="https://techsparks.co" target="_blank" rel="noopener noreferrer" className="text-[#B87333] hover:underline">TechSparks</a>
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <Link href="#" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-[#B87333] transition-colors font-black">Privacy</Link>
                        <Link href="#" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-[#B87333] transition-colors font-black">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
