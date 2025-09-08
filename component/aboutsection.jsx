import { motion } from 'framer-motion';
import Image from 'next/image';
import Profilepic from '../assets/Media.jpg';

export default function AboutSection({}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  

  return (
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
                src={Profilepic}
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
  );
}