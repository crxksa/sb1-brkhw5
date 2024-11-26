import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 dark:text-white">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              As a kinetic artist with over a decade of experience, I blend mechanical engineering 
              principles with artistic vision to create dynamic sculptures that challenge the 
              boundaries between technology and art.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              My work has been featured in galleries worldwide and has received recognition for 
              its innovative approach to movement and interactive experiences.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <GraduationCap className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <span className="dark:text-gray-300">MFA in Sculpture, Rhode Island School of Design</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <span className="dark:text-gray-300">15+ Years of Professional Experience</span>
              </div>
              <div className="flex items-center">
                <Award className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <span className="dark:text-gray-300">Multiple International Art Awards</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&q=80"
              alt="Artist at work"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;