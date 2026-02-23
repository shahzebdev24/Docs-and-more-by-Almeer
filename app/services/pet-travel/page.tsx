"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, ShieldCheck, Clock, ArrowRight, HelpCircle,
    PawPrint, Globe, Syringe, FileCheck, ShieldAlert,
    Info, Zap, Truck, Plane, UserCheck, Heart
} from "lucide-react";

const petServices = [
    {
        title: "Export Permits",
        description: "Official documentation and permits required by the Ministry of National Food Security & Research for pet export.",
        icon: <FileCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Health Certificates",
        description: "Endorsement of Veterinary Health Certificates to ensure your pet is fit for international travel.",
        icon: <ShieldCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Microchipping",
        description: "ISO-compliant microchip installation and registration, mandatory for EU, UAE, and USA entry.",
        icon: <Zap className="w-8 h-8 text-white" />
    },
    {
        title: "Rabies Titer Tests",
        description: "Facilitating blood sampling and laboratory testing required for high-compliance countries.",
        icon: <Syringe className="w-8 h-8 text-white" />
    },
    {
        title: "Travel Crate Advice",
        description: "Guidance on IATA-approved travel crates and specific airline requirements for pet safety.",
        icon: <Truck className="w-8 h-8 text-white" />
    },
    {
        title: "Airline Booking",
        description: "Facilitation of Manifest Cargo or Excess Baggage bookings specifically for live animals.",
        icon: <Plane className="w-8 h-8 text-white" />
    }
];

const processSteps = [
    {
        title: "Initial Assessment",
        description: "Reviewing your destination's specific pet import rules and your pet's current health status.",
        icon: <UserCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Vaccination Record",
        description: "Updating Rabies and other contagious disease shots at least 30 days before travel.",
        icon: <Heart className="w-8 h-8 text-white" />
    },
    {
        title: "Government Permit",
        description: "Submitting application to the Animal Quarantine Department (AQD) for the final Export Permit.",
        icon: <ShieldCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Final Clearance",
        description: "Final veterinary checkup and documentation handover 48-72 hours before flight schedule.",
        icon: <CheckCircle className="w-8 h-8 text-white" />
    }
];

const faqs = [
    {
        question: "Can I take my pet to Dubai from Pakistan?",
        answer: "Yes, Dubai has specific rules including a mandatory Rabies Titer Test result (at least 90 days before travel for some cases) and an Import Permit from the Ministry of Climate Change and Environment (MOCCAE)."
    },
    {
        question: "Is microchipping painful for my pet?",
        answer: "No, microchipping is a quick procedure similar to a routine vaccination and provides a permanent, secure identity for your pet throughout their life."
    },
    {
        question: "What is an IATA-approved crate?",
        answer: "IATA (International Air Transport Association) has strict standards for crates to ensure the pet can stand, turn around, and lie down comfortably with proper ventilation."
    },
    {
        question: "How long does the entire process take?",
        answer: "For easy destinations, it takes 2-4 weeks. For high-compliance countries (like those in the EU), the process can take 3-4 months due to Titer Test waiting periods."
    }
];

export default function PetTravelServices() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="pt-[280px] md:pt-[320px] pb-24 bg-[#FDFBF7] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#006A70]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#B87333]/5 rounded-full blur-3xl"></div>

                <div className="mx-auto w-[90%] md:w-[70%] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">Relocate with Family</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                Pet Travel & <span className="text-[#B87333]">Relocation</span>
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Official facilitation for pet export permits, microchipping, and health
                                documentation. Because your pets are family too.
                            </p>
                            <Link href="https://wa.me/923122373233?text=Hello%2C%20I%20need%20help%20with%20document%20attestation" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Start Relocation Plan
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[550px] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white"
                        >
                            <div className="absolute inset-0 bg-[#006A70]/10 flex items-center justify-center">
                                <PawPrint className="w-32 h-32 text-[#006A70]/30" />
                            </div>
                            <Image
                                src="/ibcc-hero.png"
                                alt="Pet Travel and Relocation Services"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#006A70]/40 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Services Grid */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6 tracking-tight">Expert <span className="text-[#B87333]">Pet Solutions</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Managing every compliance detail for a stress-free journey.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {petServices.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-[#FDFBF7] p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="w-16 h-16 bg-[#006A70] rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-black text-[#006A70] mb-4 tracking-tight">{service.title}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Step-by-Step Process */}
            <section className="py-24 bg-[#006A70] text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mt-32"></div>
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">The Journey <span className="text-[#B87333]">Timeline</span></h2>
                    <p className="text-xl opacity-80 font-medium">From local checkup to international arrival.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {processSteps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-[#B87333] rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{step.title}</h3>
                            <p className="text-white/70 text-sm font-medium leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Global Destinations */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <Globe className="w-16 h-16 text-[#006A70] mb-8" />
                        <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-8 tracking-tight italic">Relocation to <span className="text-[#B87333]">Gulf & Europe</span></h2>
                        <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                            Each country has unique pet import protocols. We specialize in navigating
                            the strict requirements for the **UAE (Habshan/Dubai)**, UK, EU countries,
                            and the USA, ensuring your pet meets all local veterinary standards.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Import Permit Facilitation (MOCCAE/EU)",
                                "Rabies Neutralizing Antibody Titer Test",
                                "IATA Standards Compliance",
                                "Embassy Attestation of Health Docs"
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-center text-lg text-[#36454F] font-bold">
                                    <CheckCircle className="w-6 h-6 text-[#B87333]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#FDFBF7] p-12 rounded-[50px] border border-gray-100 shadow-sm">
                        <ShieldAlert className="w-16 h-16 text-[#B87333] mb-6" />
                        <h3 className="text-3xl font-black text-[#006A70] mb-4">Important Note</h3>
                        <p className="text-lg text-gray-600 font-medium leading-relaxed italic">
                            "Pet travel requires planning **months** in advance. Many countries
                            require a 90-day waiting period after the Rabies Titer test before the
                            pet can travel. Don't wait until the last week of your move!"
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4 text-center tracking-tight text-center">Pet Travel <span className="text-[#B87333]">FAQ</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Answers to the most common relocation queries.</p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
                            >
                                <div className="flex gap-4">
                                    <HelpCircle className="w-6 h-6 text-[#B87333] shrink-0" />
                                    <div>
                                        <h4 className="text-xl font-bold text-[#006A70] mb-3 leading-tight text-left">{faq.question}</h4>
                                        <p className="text-[#36454F] font-medium leading-relaxed opacity-80 text-left">{faq.answer}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FooterCTA />
            <Footer />
        </main>
    );
}

