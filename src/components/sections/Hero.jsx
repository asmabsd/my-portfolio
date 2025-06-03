
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full floating-animation"></div>
      <div className="absolute top-40 right-32 w-16 h-16 bg-primary/30 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-primary/25 rounded-full floating-animation" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-32 h-32 mx-auto mb-8"
          >
            <img
              className="w-full h-full rounded-full object-cover border-4 border-primary shadow-2xl"
              alt="Photo"
              src="Image/YassineBM.jpg" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold gradient-text mb-4"
          >
            Yassine Ben Mabrouk
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            Software Engineering Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg max-w-2xl mx-auto text-muted-foreground mb-8"
          >
            Passionate mobile engineering student from Tunisia.
            I’m eager to expand my knowledge and explore how emerging technologies such as Artificial Intelligence can be
            integrated into mobile development to create innovative solutions that enhance and simplify everyday life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <a href="Resume/YassineBenMabrouk_Resume_Abroad.pdf" download>
              <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com/YassineBM4">
            <Button variant="ghost" size="icon" className="hover:bg-primary/20">
              <Github className="h-6 w-6" />
            </Button>
            </a>
            <a href="https://www.linkedin.com/in/yassine-ben-mabrouk-b7b071220/">
            <Button variant="ghost" size="icon" className="hover:bg-primary/20">
              <Linkedin className="h-6 w-6" />
            </Button>
            </a>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20">
              <Mail className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </motion.button>
      </div>
    </section>
  );
}
