"use client";
import { useState } from 'react';
import axios from "axios";
import CONFIG from "../config/config";
import { motion } from 'framer-motion';
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post(
                `${CONFIG.BASE_URL}/contact`,
                formData,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
            console.log("✅ API response:", res.data);

            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            console.error("❌ Error submitting:", err.response?.data || err.message);
            toast.error("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            {/* Toast Container */}
            <Toaster position="top-center" reverseOrder={false} />
            {/* Contact Section */}
            <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <motion.h2
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            Get In <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Touch</span>
                        </motion.h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
                        <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
                        </p>
                    </div>
                    {/* ✅ Mobile Responsive Fix */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3 sm:ml-4">
                                        <h4 className="text-base sm:text-lg font-medium">Email</h4>
                                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">ajs303259@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3 sm:ml-4">
                                        <h4 className="text-base sm:text-lg font-medium">Phone</h4>
                                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">91+6383368953</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3 sm:ml-4">
                                        <h4 className="text-base sm:text-lg font-medium">Location</h4>
                                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Coimbatore</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-10 mb-4 sm:mb-6">Follow Me</h3>
                            <div className="flex space-x-3 sm:space-x-4">
                                {/* GitHub Icon */}
                                <a
                                    href="https://github.com/arvindaj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                    aria-label="Visit GitHub profile"
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>

                                {/* LinkedIn Icon */}
                                <a
                                    href="https://www.linkedin.com/in/arvind-j-936aa1228"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                    aria-label="Visit LinkedIn profile"
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Send Me a Message</h3>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                                            placeholder="Your Message"
                                        ></textarea>
                                    </div>
                                </div>
                                {/* Submit Button with Loader */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70"
                                >
                                    {loading && (
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                            ></path>
                                        </svg>
                                    )}
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                                {status && <p className="mt-4 text-center text-sm sm:text-base">{status}</p>}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );


}
