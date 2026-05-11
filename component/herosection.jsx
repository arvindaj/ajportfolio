import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section id="home" className="pt-16 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-200 to-blue-200 dark:from-purple-900 dark:to-blue-900 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute left-1/4 top-1/4 w-1/3 h-1/3 bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600/10 to-blue-500/10 dark:from-purple-600/20 dark:to-blue-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full mb-4">
              FullStack Developer
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Arvind
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0">
              New-gen coder, mastering JavaScript, React, Next.js, Node.js, and MongoDB,
              I craft elegant, performant, user-friendly web experiences.
              Let’s bring your vision to life as a full-stack developer.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href="#contact"
                className="px-4 py-2 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-4 py-2 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-6">
              <a
                href="https://github.com/arvindaj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Visit GitHub profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/arvind-j-936aa1228"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Visit LinkedIn profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="w-full max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg h-[285px] sm:h-[250px] md:h-[350px] lg:h-[400px] overflow-hidden">
              <Spline
                className="h-full w-full"
                scene="https://prod.spline.design/xXKgRc2oM0iCfGli/scene.splinecode"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}