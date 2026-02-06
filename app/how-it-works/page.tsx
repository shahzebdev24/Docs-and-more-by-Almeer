"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    UploadCloud, Search, CheckCircle, Truck,
    ShieldCheck, Clock, ArrowRight, HelpCircle,
    FileText, Globe, Headset, Zap, ShieldAlert
} from "lucide-react";

const processSteps = [
    {
        number: "01",
        title: "Initial Consultation & Review",
        description: "Everything starts with a clear understanding. We review your document's current status and destination requirements to provide an accurate roadmap.",
        details: [
            "Document authenticity check",
            "Destination-specific compliance review",
            "Transparent fee & timeline estimation",
            "Pre-submission checklist"
        ],
        icon: <HelpCircle className="w-8 h-8 text-white" />,
    },
    {
        number: "02",
        title: "Secure Document Collection",
        description: "Submit your documents via our secure portal or physically at our Karachi office. Every document is logged into our tracking system.",
        details: [
            "End-to-end tracking ID linked to your case",
            "Secure physical storage cabinets",
            "Digital backup for verification purposes",
            "Courier collection service facilitation"
        ],
        icon: <UploadCloud className="w-8 h-8 text-white" />,
    },
    {
        number: "03",
        title: "Official Liaison & Processing",
        description: "Our field experts manage the entire cycle with MOFA, IBCC, HEC, or relevant foreign missions through established official channels.",
        details: [
            "Priority queue management",
            "Dealing with complex correction cases",
            "Direct liaison with department heads",
            "Daily status updates from the field"
        ],
        icon: <Zap className="w-8 h-8 text-white" />,
    },
    {
        number: "04",
        title: "Quality Assurance & Delivery",
        description: "The final step involves a rigorous multi-point check of every seal and stamp before we safely hand over the documents to you.",
        details: [
            "Seal verification against embassy standards",
            "Digital scanning of completed documents",
            "Insured international & local courier",
            "Lifetime assistance for and verification"
        ],
        icon: <CheckCircle className="w-8 h-8 text-white" />,
    }
];

export default function HowItWorks() {
    return (
        <main className="bg-white">
            {/* Professional Hero Section */}
            <section className="pt-[280px] md:pt-[320px] pb-32 bg-[#FDFBF7] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#006A70]/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B87333]/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>

                <div className="mx-auto w-[90%] md:w-[70%] relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#B87333] font-black tracking-[0.3em] uppercase text-xs mb-6 block">Our Methodology</span>
                        <h1 className="text-6xl md:text-8xl font-black text-[#006A70] mb-8 tracking-tighter leading-none italic">
                            Streamlined <span className="text-[#B87333] not-italic">&</span> Secure
                        </h1>
                        <p className="text-xl md:text-2xl text-[#36454F]/80 font-medium max-w-4xl mx-auto leading-relaxed mb-12">
                            Transforming complex legal bureaucracy into a simplified, transparent,
                            and rapid experience for global citizens and professionals.
                        </p>
                        <div className="flex justify-center gap-12 border-y border-gray-100 py-10">
                            <div className="text-left">
                                <div className="text-3xl font-black text-[#006A70]">100%</div>
                                <div className="text-[10px] uppercase font-bold tracking-widest text-[#B87333]">Success Rate</div>
                            </div>
                            <div className="w-[1px] bg-gray-200"></div>
                            <div className="text-left">
                                <div className="text-3xl font-black text-[#006A70]">15k+</div>
                                <div className="text-[10px] uppercase font-bold tracking-widest text-[#B87333]">Documents Handled</div>
                            </div>
                            <div className="w-[1px] bg-gray-200"></div>
                            <div className="text-left">
                                <div className="text-3xl font-black text-[#006A70]">24h</div>
                                <div className="text-[10px] uppercase font-bold tracking-widest text-[#B87333]">Average Response</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Timeline Process */}
            <section className="py-32 bg-white relative">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        {/* Sidebar Text */}
                        <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
                            <h2 className="text-4xl md:text-5xl font-black text-[#006A70] mb-8 leading-tight tracking-tighter uppercase">
                                The Roadmap to <span className="text-[#B87333]">Global Mobility</span>
                            </h2>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed mb-10 italic border-l-4 border-[#B87333] pl-6">
                                "Our process isn't just about stamps; it's about the security and legitimacy
                                of your future global endeavors."
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-center p-6 bg-[#FDFBF7] rounded-3xl border border-gray-100 shadow-sm">
                                    <ShieldCheck className="w-8 h-8 text-[#006A70]" />
                                    <div>
                                        <h4 className="font-black text-[#006A70] text-sm uppercase">Secure Handling</h4>
                                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">ISO 27001 Methodology</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center p-6 bg-[#FDFBF7] rounded-3xl border border-gray-100 shadow-sm">
                                    <Clock className="w-8 h-8 text-[#006A70]" />
                                    <div>
                                        <h4 className="font-black text-[#006A70] text-sm uppercase">Timely Updates</h4>
                                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Whatsapp & Portal Access</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Steps Vertical Timeline */}
                        <div className="lg:col-span-8 space-y-16">
                            {processSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative pl-24 group"
                                >
                                    {/* Line connector */}
                                    {idx !== processSteps.length - 1 && (
                                        <div className="absolute left-[39px] top-24 bottom-[-64px] w-[2px] bg-gradient-to-b from-[#006A70] to-[#B87333]/20"></div>
                                    )}

                                    {/* Number Circle */}
                                    <div className="absolute left-0 top-0 w-20 h-20 bg-[#006A70] rounded-[2rem] flex items-center justify-center shadow-xl group-hover:bg-[#B87333] transition-all duration-500 group-hover:rotate-6 z-10 border-4 border-white">
                                        <span className="text-white text-3xl font-black italic">{step.number}</span>
                                    </div>

                                    <div className="bg-[#FDFBF7] p-12 rounded-[40px] border border-gray-50 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:border-[#006A70]/10">
                                        <div className="flex justify-between items-start mb-8">
                                            <h3 className="text-3xl font-black text-[#006A70] tracking-tighter leading-none">{step.title}</h3>
                                            <div className="p-4 bg-white rounded-2xl shadow-sm text-[#B87333]">
                                                {step.icon}
                                            </div>
                                        </div>
                                        <p className="text-lg text-gray-600 font-medium leading-relaxed mb-10">
                                            {step.description}
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {step.details.map((detail, dIdx) => (
                                                <div key={dIdx} className="flex gap-3 items-center text-sm font-bold text-[#36454F]">
                                                    <CheckCircle className="w-4 h-4 text-[#B87333]" />
                                                    {detail}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitment to Security */}
            <section className="py-32 bg-[#006A70] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#B87333]/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2">
                            <ShieldAlert className="w-20 h-20 text-[#B87333] mb-10" />
                            <h2 className="text-5xl font-black mb-8 italic tracking-tighter leading-none">Security <span className="text-[#B87333] not-italic">&</span> Confidentiality</h2>
                            <p className="text-xl opacity-90 leading-relaxed font-medium mb-12">
                                We understand the sensitivity of your official identity documents.
                                Our facilities are equipped with 24/7 surveillance, and our team is
                                trained in the highest standards of data privacy.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="border border-white/10 p-8 rounded-[40px] bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all group">
                                    <FileText className="w-10 h-10 text-[#B87333] mb-6 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-black text-lg mb-2">No Photocopying</h4>
                                    <p className="text-sm opacity-60 font-medium">Unless required by law, we never keep unauthorized copies.</p>
                                </div>
                                <div className="border border-white/10 p-8 rounded-[40px] bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all group">
                                    <Globe className="w-10 h-10 text-[#B87333] mb-6 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-black text-lg mb-2">Verified Transit</h4>
                                    <p className="text-sm opacity-60 font-bold uppercase tracking-widest">Insured Courier Partners Only</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[50px] border border-white/10 shadow-2xl">
                                <h3 className="text-3xl font-black mb-10 tracking-tighter text-[#B87333]">Common Compliance FAQs</h3>
                                <div className="space-y-8">
                                    <div className="group cursor-default">
                                        <h5 className="font-black text-lg text-white mb-2 flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#B87333]"></div>
                                            Document Transit Time?
                                        </h5>
                                        <p className="text-sm opacity-70 font-medium pl-5 group-hover:opacity-100 transition-opacity">Usually 2-5 working days depending on the specific department requirements.</p>
                                    </div>
                                    <div className="group cursor-default">
                                        <h5 className="font-black text-lg text-white mb-2 flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#B87333]"></div>
                                            Tracking Capability?
                                        </h5>
                                        <p className="text-sm opacity-70 font-medium pl-5 group-hover:opacity-100 transition-opacity">Every application is given a unique tracking ID traceable through our portal.</p>
                                    </div>
                                    <div className="group cursor-default">
                                        <h5 className="font-black text-lg text-white mb-2 flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#B87333]"></div>
                                            Refund Policy?
                                        </h5>
                                        <p className="text-sm opacity-70 font-medium pl-5 group-hover:opacity-100 transition-opacity">Full refund of processing fees if we fail to deliver on our timelines (terms apply).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Need expert guidance message */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="bg-[#FDFBF7] p-12 md:p-20 rounded-[80px] border border-gray-100 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#006A70]"></div>
                        <h2 className="text-4xl md:text-6xl font-black text-[#006A70] mb-8 tracking-tighter leading-none italic uppercase">
                            Still have <span className="text-[#B87333] not-italic">questions?</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-12">
                            Our compliance experts are available for a one-on-one session to clarify your specific document needs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <Link href="/contact" className="bg-[#006A70] text-white px-12 py-6 rounded-full font-black text-xl hover:bg-[#B87333] transition-all shadow-xl hover:-translate-y-2 flex items-center gap-4 group">
                                <Headset className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                                Talk to an Expert
                            </Link>
                            <Link href="/services/mofa-attestation" className="bg-white text-[#006A70] border-2 border-[#006A70] px-12 py-6 rounded-full font-black text-xl hover:bg-[#006A70] hover:text-white transition-all">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <FooterCTA />
            <Footer />
        </main>
    );
}
