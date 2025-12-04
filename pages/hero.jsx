
"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Spline from '@splinetool/react-spline';
import Contact from "../component/contact"


// Import your images (ensure paths are correct)
import Landingpaval from '../assets/landingpagepaval.png';
import profilepic from '../assets/Media.jpg';
import Multiscale from '../assets/fullstackmultiscale.png';
import Skillorelanding from '../assets/landingskillorea.png';
import Dashboard from '../assets/dashboard.png';


import Navbar from '../component/nav';
import HeroSection from '../component/herosection'


export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const projects = [
    {
      id: 1,
      title: "Full-Stack Trading Platform",
      description: "Developed a comprehensive trading platform with real-time data integration, advanced charting capabilities, and secure transaction processing. Built with modern technologies for optimal performance and scalability.",
      tech: ["React", "Node.js", "MongoDB", "WebSocket", "Chart.js"],
      image: Multiscale,
      demoUrl: "https://multiscalefrontendwebsite.vercel.app/",
      githubUrl: "https://github.com/arvindaj/multiscalefrontendwebsite",
      features: ["Real-time market data", "Advanced charting", "Portfolio management", "Risk analytics"],
    },
    {
      id: 2,
      title: "Skillore E-Learning Platform",
      description: "Created an interactive e-learning platform with course management, video streaming, progress tracking, and certification system. Features responsive design and seamless user experience.",
      tech: ["Next.js", "TypeScript", "Prisma", "Stripe", "AWS S3"],
      image: Skillorelanding,
      demoUrl: "https://landingpageone-pi.vercel.app",
      githubUrl: "https://github.com/arvindaj/landingpageone",
      features: ["Course management", "Video streaming", "Progress tracking", "Certifications"],
    },
    {
      id: 3,
      title: "Paval Business Landing",
      description: "Designed and developed a modern business landing page with stunning visuals, smooth animations, and conversion-optimized layout. Fully responsive with excellent performance metrics.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      image: Landingpaval,
      demoUrl: "https://pavalsoftapplanding.vercel.app",
      githubUrl: "https://github.com/arvindaj/pavalsoftapplanding",
      features: ["Responsive design", "Smooth animations", "SEO optimized", "Fast loading"],
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Built a comprehensive analytics dashboard with real-time data visualization, custom reports, and interactive charts. Provides deep insights into business metrics and KPIs.",
      tech: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
      image: Dashboard,
      demoUrl: "https://myskilloreadashboard.vercel.app/",
      githubUrl: "https://https://github.com/arvindaj/myskilloreadashboard",
      features: ["Real-time analytics", "Custom reports", "Data visualization", "Export functionality"],
    },
    {
       id: 4,
      title: "Belair Cottages",
      description: "Built a comprehensive analytics dashboard with real-time data visualization, custom reports, and interactive charts. Provides deep insights into business metrics and KPIs.",
      tech: ["React", "framer-motion", "Node.js", "Redis"],
      image: Dashboard,
      demoUrl: "https://belairwebsitecottage.vercel.app/",
      githubUrl: "https://github.com/arvindaj/BelairWebsitecottage",
      features: ["Real-time analytics", "Custom reports", "Data visualization", "Export functionality"],
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "TypeScript", level: 70 },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content: "Working with this developer was an absolute pleasure. Their attention to detail and commitment to quality is unmatched.",
      avatar: "/avatar1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, StartupXYZ",
      content: "Delivered our project ahead of schedule with all requirements perfectly implemented. Would definitely hire again!",
      avatar: "/avatar2.jpg",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${CONFIG.BASE_URL}/contact`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("✅ API response:", res.data);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("❌ Error submitting:", err.response?.data || err.message);
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Head>
          <title>My Portfolio - FullStack Developer</title>
          <meta name="description" content="Personal portfolio showcasing my work and skills as a frontend developer" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/media.jpg" />
        </Head>

       <Navbar/>

       <HeroSection/>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                About <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Me</span>
              </motion.h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                  Hey, I&apos;m Arvind, a passionate FullStack Developer eager to build dynamic and user-friendly web applications.
                  My journey started with curiosity and grew into a love for solving problems with clean code.
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                  Skilled in JavaScript, React.js, Next.js, Python, and MongoDB, I thrive on creating smooth and performant web experiences.
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  I&apos;m a quick learner, highly motivated, and ready to collaborate in a dynamic team.
                </p>
              </motion.div>
              <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500"></div>
                  {!imageLoaded && (
                    <div className="absolute inset-0 opacity-80 flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                      Profile Image
                    </div>
                  )}
                  <Image
                    src={profilepic}
                    alt="Profile"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => console.error('Failed to load image')}
                    priority
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Education & Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <h4 className="text-base sm:text-lg font-medium">FullStack Developer</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">BNR Cogniitec • Dec-2024 - Present</p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Leading frontend development for enterprise SaaS products</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 className="text-base sm:text-lg font-medium">FullStack Developer</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Xtown • Jan-2024 - Nov-2024</p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Developed responsive websites for clients</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <h4 className="text-base sm:text-lg font-medium">BE Computer Science Engineering</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">SNS College of Technology • 2020 - 2023</p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Specialized in Web Technologies</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16  overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                Featured <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Projects</span>
              </motion.h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-4"></div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                Discover my latest projects, showcasing innovative solutions and cutting-edge design crafted with precision and creativity.
              </p>
            </div>
            <div className="relative overflow-hidden">
              <motion.div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                role="region"
                aria-label="Project carousel"
              >
                {projects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="grid grid-cols-1 gap-6 bg-white  rounded-3xl  p-4 sm:p-6 max-w-[100%] sm:max-w-[1080px] mx-auto">
                      <motion.div
                        className="relative overflow-hidden rounded-2xl group"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-500/20 z-10 backdrop-blur-sm group-hover:from-purple-600/30 group-hover:to-blue-500/30 transition-all duration-500"></div>
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={800}
                          height={600}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                          quality={80}
                          placeholder="blur"
                          priority
                          onError={() => console.error(`Failed to load image for ${project.title}`)}
                        />
                        <div className="absolute inset-x-2 sm:inset-x-4 bottom-2 sm:bottom-4 flex gap-2 z-20">
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm text-center backdrop-blur-md shadow-md transition-all duration-300 hover:bg-white hover:dark:bg-gray-900 hover:scale-105 group-hover:opacity-100 opacity-70"
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                            aria-label={`View live demo of ${project.title}`}
                          >
                            <span className="flex items-center justify-center gap-1 sm:gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Live Demo
                            </span>
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gray-900/90 dark:bg-white/90 text-white dark:text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm text-center backdrop-blur-md shadow-md transition-all duration-300 hover:bg-gray-900 hover:dark:bg-white hover:scale-105 group-hover:opacity-100 opacity-70"
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                            aria-label={`View source code of ${project.title} on GitHub`}
                          >
                            <span className="flex items-center justify-center gap-1 sm:gap-2">
                              <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                  fillRule="evenodd"
                                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              GitHub
                            </span>
                          </motion.a>
                        </div>
                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20">
                          <span className="px-2 sm:px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white rounded-full text-xs sm:text-sm font-bold backdrop-blur-md shadow-sm">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </motion.div>
                      <motion.div
                        className="p-4 sm:p-6 flex flex-col justify-center bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 rounded-2xl shadow-inner"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, margin: "-50px" }}
                      >
                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                          <span className="w-8 sm:w-12 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></span>
                          <span className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                            Project {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="mb-4 sm:mb-6">
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 uppercase tracking-wider">
                            Key Features
                          </h4>
                          <div className="grid grid-cols-1 gap-2 sm:gap-3">
                            {project.features.map((feature, i) => (
                              <motion.div
                                key={i}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
                                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        <div className="mb-6 sm:mb-8">
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 uppercase tracking-wider">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {project.tech.map((tech, i) => (
                              <motion.span
                                key={i}
                                className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-100/80 to-blue-100/80 dark:from-purple-900/40 dark:to-blue-900/40 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-700/50"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                viewport={{ once: true, margin: "-50px" }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-4">
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg text-xs sm:text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-1 sm:gap-2"
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                            aria-label={`View live demo of ${project.title}`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 font-medium rounded-lg text-xs sm:text-sm transition-all duration-300 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 flex items-center gap-1 sm:gap-2"
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                            aria-label={`View source code of ${project.title} on GitHub`}
                          >
                            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            View Code
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 z-30 backdrop-blur-md"
                aria-label="Previous project"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 z-30 backdrop-blur-md"
                aria-label="Next project"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 z-30 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg backdrop-blur-md text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
                aria-label={isAutoPlay ? "Pause carousel" : "Play carousel"}
              >
                {isAutoPlay ? (
                  <span className="flex items-center gap-1 sm:gap-2">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                    Pause
                  </span>
                ) : (
                  <span className="flex items-center gap-1 sm:gap-2">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play
                  </span>
                )}
              </button>
            </div>
            <div className="flex justify-center mt-6 sm:mt-8 gap-1 sm:gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${index === currentSlide
                    ? 'w-8 sm:w-10 h-1.5 sm:h-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full'
                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-full'
                    }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            <div className="mt-4 sm:mt-6 max-w-sm sm:max-w-md mx-auto">
              <div className="flex justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span>Project {currentSlide + 1}</span>
                <span>{projects.length} Projects</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                <motion.div
                  className="h-1.5 sm:h-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((currentSlide + 1) / projects.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
            <div className="mt-8 sm:mt-12 text-center">
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                aria-label="Explore all projects"
              >
                <span>Explore All Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                Technical <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Skills</span>
              </motion.h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Development Skills</h3>
                <div className="space-y-4 sm:space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm sm:text-base font-medium">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                        <motion.div
                          className="bg-gradient-to-r from-purple-600 to-blue-500 h-1.5 sm:h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true, margin: "-50px" }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Tools & Technologies</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {['Git', 'VS Code', 'Figma', 'Webpack', 'Jest', 'GitHub Actions', 'Docker', 'AWS', 'Vercel'].map((tool) => (
                    <div key={tool} className="flex items-center gap-2 p-3 sm:p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></span>
                      <span className="text-xs sm:text-sm font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      

        

        <Contact/>

        {/* Footer */}
        <footer className="py-6 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Aj<span className="text-gray-900 dark:text-white">Portfolio</span>
                </span>
                <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  &copy; {new Date().getFullYear()} All rights reserved.
                </p>
              </div>
              <div className="flex space-x-4 sm:space-x-6">
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
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}