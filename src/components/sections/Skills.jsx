import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

// Compétences techniques basées sur ton profil
const technologies = [
  'Spring Boot', 'Angular', 'Symfony 5', 'Java', 'PHP', 'MySQL', 'TypeScript', 'JavaScript',
  'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Ansible', 'OpenStack', 'Azure',
  'Git', 'Linux', 'C', 'UML', 'HTML', 'CSS', 'Bootstrap', 'Postman'
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Compétences & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Voici un aperçu des technologies, outils et environnements de développement que j’ai utilisés dans mes projets académiques et professionnels.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default text-sm py-2 px-4"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
