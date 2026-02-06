"use client"
import { motion } from "framer-motion";

export default function FooterCTA() {
    return (
        <section className="mx-auto w-[90%] md:w-[80%] mb-32">
            <div className="bg-[#006A70] py-16 md:py-20 px-8 rounded-[3rem] shadow-2xl overflow-hidden relative mt-16">
                {/* Decorative bronze circle back */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B87333] opacity-10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                <div className="mx-auto w-[90%] md:w-[70%] text-center text-white relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight ">
                            Start with a Trusted Partner
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto font-medium leading-relaxed">
                            Join thousands of satisfied customers who trust us with their document
                            <span className="text-[#B87333] font-bold"> Docs & More by Almeer</span> needs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-[#006A70] font-black text-lg px-10 py-5 rounded-full shadow-2xl hover:bg-gray-50 transition-all min-w-[280px]"
                            >
                                [Contact Us]
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-white bg-transparent text-white font-black text-lg px-10 py-5 rounded-full hover:bg-white hover:text-[#006A70] transition-all min-w-[280px]"
                            >
                                Email Us Today
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
