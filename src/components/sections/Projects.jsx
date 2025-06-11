
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Signify Academic Project',
    description: 'Developed Signify, a gamified mobile app that teaches you the hand sign language in a funny and engaging way. It offers innovative, interactive features to help users stay motivated and enjoy the learning process without ever feeling bored.',
    image: 'Image/signLanguage.jpg',
    technologies: ['NestJS', 'Jetpack compose', 'SwiftUI', 'Typescript', 'MongoDB'],
    liveUrl: 'https://github.com/YassineBM4/Signify/tree/master#readme',
    githubUrl: 'https://github.com/YassineBM4/Signify'
  },
  {
    title: 'MSAware Academic Project',
    description: 'Created MSAware, a cross-platform AI-driven mobile app connected to smartwatch to support individuals with Multiple Sclerosis to predict MS attacks with probabilistic accuracy.',
    image: 'Image/MSaware.jpg',
    technologies: ['NestJS', 'Flutter', 'Typescript', 'Python', 'MongoDB', 'Firebase'],
    liveUrl: 'https://www.linkedin.com/posts/yassine-ben-mabrouk-b7b071220_msaware-multiplesclerosis-ai-activity-7331102589335269376-6xf3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeJxE8Bg5LK8QxgknAhvn89_Q7f93pK3I4',
    githubUrl: '#'
  },
  {
    title: 'Abshore Internship Project',
    description: 'Built the frontend of a financial verification platform for Abshore, allowing users to check if a check issuer has sufficient funds. Focused on creating a clean, user-friendly interface with secure integration to backend verification services.',
    image: 'Image/abshore.jpeg',
    technologies: ['React', 'React Bootstrap'],
    liveUrl: '#',
    githubUrl: 'https://github.com/YassineBM4/React-Abshore'
  },
  {
    title: 'Swapcraze Academic Project',
    description: 'Built 3 bartering applications for web, desktop, and mobile for product and service exchanges.',
    image: 'Image/bartering.jpg',
    technologies: ['Java For Desktop', 'Symfony For Web', 'PhpMyAdmin', 'Flutterflow For Mobile App'],
    liveUrl: '#',
    githubUrl: 'https://github.com/YassineBM4/Jeagers'
  },
  {
    title: 'Health Mobile App Professional Project',
    description: 'Designed a health mobile app that helps users locate nearby medical facilities, make reservations, and directly contact doctors.',
    image: 'Image/DRkhaled.jpg',
    technologies: ['Figma'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating
            innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 glass-effect border-primary/20 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      src={project.image} />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.liveUrl !== '#' && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gradient-bg hover:opacity-90">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                    )}
                    {project.githubUrl !== '#' && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                    )}
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
