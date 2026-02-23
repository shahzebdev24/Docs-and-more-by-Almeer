
"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import {
    CheckCircle, Globe, FileCheck, ShieldCheck,
    Clock, ArrowRight, HelpCircle, Landmark,
    MapPin, ClipboardCheck, Info, Search,
    FileText, UserCheck, Zap, Award
} from "lucide-react";

const regionalBoards = [
    { province: "Punjab", boards: ["BISE Lahore", "BISE Rawalpindi", "BISE Multan", "BISE Faisalabad", "BISE Gujranwala"] },
    { province: "Sindh", boards: ["BSEK/BIEK Karachi", "BISE Hyderabad", "BISE Sukkur", "BISE Larkana", "BISE Mirpurkhas"] },
    { province: "KPK", boards: ["BISE Peshawar", "BISE Abbottabad", "BISE Mardan", "BISE Kohat", "BISE Swat"] },
    { province: "Balochistan", boards: ["BISE Quetta", "Technical Board Quetta"] },
    { province: "Federal/Others", boards: ["FBISE Islamabad", "AJK BISE Mirpur", "Technical Education Boards (PBTE, SBTE)"] }
];

const services = [
    {
        title: "Board Verification",
        description: "Official verification of Matric and Inter certificates for IBCC, MOFA, or Employment abroad.",
        icon: <ShieldCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Duplicate Documents",
        description: "Applying for lost marksheets or certificates from any Board of Intermediate & Secondary Education in Pakistan.",
        icon: <FileText className="w-8 h-8 text-white" />
    },
    {
        title: "Migration (NOC)",
        description: "Facilitating inter-board migration certificates for students moving across different educational regions.",
        icon: <Globe className="w-8 h-8 text-white" />
    },
    {
        title: "Correction of Records",
        description: "Official correction of Name, Parentage, or Date of Birth across all Pakistani BISE boards.",
        icon: <ClipboardCheck className="w-8 h-8 text-white" />
    }
];

const faqs = [
    {
        question: "Can you handle work for boards outside of Karachi?",
        answer: "Yes, we have a nationwide network that allows us to process documentation from all Boards of Intermediate & Secondary Education (BISE) across Punjab, Sindh, KPK, Balochistan, and FBISE Islamabad."
    },
    {
        question: "How do I send my documents to a board in another province?",
        answer: "You simply provide us with the documents, and our specialized team handles the secure transit, departmental filing, and follow-up at the respective regional board office."
    },
    {
        question: "What is the typical timeframe for nationwide board works?",
        answer: "Since it involves regional offices, the timeframe varies from 10 to 20 working days depending on the specific board's location and the type of service required."
    },
    {
        question: "Is personal appearance required at the regional board?",
        answer: "In most cases, no. We can manage the process on your behalf with a proper letter of authority or specific board-authorized forms."
    }
];

export default function NationwideBoardServices() {
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
                            <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-4 block underline decoration-2 underline-offset-8">All Pakistan Coverage</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#006A70] mb-8 tracking-tight leading-[1.1]">
                                Nationwide <span className="text-[#B87333]">Board</span> Services
                            </h1>
                            <p className="text-xl text-[#36454F] font-medium leading-relaxed mb-10">
                                Official verification and documentation services for all 29+ Educational Boards in Pakistan.
                                No matter where your board is, we bridge the distance for you.
                            </p>
                            <Link href="https://wa.me/923122373233?text=Hello%2C%20I%20need%20help%20with%20document%20attestation" className="bg-[#006A70] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#004f54] transition-all shadow-xl inline-flex items-center gap-3 group">
                                Start Board Application
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[550px] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white"
                        >
                            <Image
                                src="/ibcc-hero.png"
                                alt="All Pakistan Board Services"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#006A70]/40 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Provinces Grid */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6 underline decoration-[#B87333] decoration-wavy underline-offset-8">Extensive <span className="text-[#B87333]">Regional</span> Reach</h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Covering every major educational board from Karachi to Peshawar.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regionalBoards.map((reg, i) => (
                        <div key={i} className="bg-[#FDFBF7] p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                            <h3 className="text-2xl font-black text-[#006A70] mb-6 flex items-center gap-3">
                                <MapPin className="text-[#B87333]" />
                                {reg.province}
                            </h3>
                            <ul className="space-y-3">
                                {reg.boards.map((board, idx) => (
                                    <li key={idx} className="text-gray-600 font-bold flex gap-3 items-center">
                                        <div className="w-1.5 h-1.5 bg-[#B87333] rounded-full"></div>
                                        {board}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Services Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[70%] text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#006A70] mb-6">Cross-Border <span className="text-[#B87333]">Documentation</span></h2>
                    <p className="text-xl text-[#36454F] font-medium opacity-80">Simplifying the complexities of regional board bureaucracy.</p>
                </div>

                <div className="mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50 flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 bg-[#006A70] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-[#B87333] transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#006A70] mb-4 group-hover:text-[#B87333] transition-colors">{service.title}</h3>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Efficiency Section */}
            <section className="py-24 bg-[#006A70] text-white">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Choose Our <span className="text-[#B87333]">National Network?</span></h2>
                            <p className="text-xl opacity-80 font-medium mb-12 leading-relaxed">
                                Handling boards outside your resident city is a logistical challenge.
                                We eliminate the need for travel, hotel stays, and regional office visits
                                by managing everything through our local field agents in every province.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Agents available in all 4 provinces + Federal",
                                    "Direct liaison with BISE secretaries office",
                                    "End-to-end tracking of document status",
                                    "Pick and Drop facility locally"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-center text-lg font-bold">
                                        <Zap className="w-6 h-6 text-[#B87333]" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/20 text-center">
                                <div className="text-4xl font-black text-[#B87333] mb-2">29+</div>
                                <div className="text-sm font-bold opacity-60 uppercase tracking-widest">Boards Covered</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/20 text-center">
                                <div className="text-4xl font-black text-[#B87333] mb-2">100%</div>
                                <div className="text-sm font-bold opacity-60 uppercase tracking-widest">Originality</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/20 text-center">
                                <div className="text-4xl font-black text-[#B87333] mb-2">4</div>
                                <div className="text-sm font-bold opacity-60 uppercase tracking-widest">Provinces</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/20 text-center">
                                <div className="text-4xl font-black text-[#B87333] mb-2">Rapid</div>
                                <div className="text-sm font-bold opacity-60 uppercase tracking-widest">Courier Dispatch</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-24 bg-white">
                <div className="mx-auto w-[90%] md:w-[70%]">
                    <div className="bg-amber-50 p-12 rounded-[50px] border border-dashed border-amber-200 flex flex-col md:flex-row gap-8 items-center">
                        <Info className="w-16 h-16 text-amber-500 shrink-0" />
                        <div>
                            <h4 className="text-2xl font-black text-amber-800 uppercase tracking-tight mb-4">A Note on Regional Fees</h4>
                            <p className="text-lg text-amber-900 font-medium leading-relaxed">
                                Please note that each provincial board has its own fee structure and specific forms.
                                Our experts will provide you with a detailed breakdown of the official board fee
                                plus our facilitation charges before we start your process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="mx-auto w-[90%] md:w-[50%]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#006A70] mb-4 text-center">Nationwide <span className="text-[#B87333]">FAQ</span></h2>
                        <p className="text-lg text-[#36454F] font-medium opacity-70">Answers for all boards across Pakistan.</p>
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
                                        <h4 className="text-xl font-bold text-[#006A70] mb-3 leading-tight">{faq.question}</h4>
                                        <p className="text-[#36454F] font-medium leading-relaxed opacity-80">{faq.answer}</p>
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

