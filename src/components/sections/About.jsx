import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Code Propre',
    description: 'Écrire un code maintenable, évolutif et performant pour des applications robustes.'
  },
  {
    icon: Palette,
    title: 'Design Créatif',
    description: 'Créer des interfaces modernes et intuitives pour une expérience utilisateur optimale.'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimiser les performances pour garantir rapidité et fluidité sur tous les appareils.'
  },
  {
    icon: Heart,
    title: 'Travail Passionné',
    description: 'Apporter rigueur, enthousiasme et engagement dans chaque projet réalisé.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">À propos de moi</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Je suis Asma Boussaada, étudiante en ingénierie informatique, passionnée par le développement web full stack,
            les technologies cloud et l’innovation digitale. Je conçois des solutions intelligentes qui allient performance,
            design et utilité.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img  
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              alt="Développeuse travaillant sur un projet"
              src="Image/aboutMe.jpg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Mon Parcours</h3>
            <p className="text-muted-foreground">
              Mon parcours a débuté avec une curiosité pour l’informatique, rapidement transformée en passion. 
              À travers mes études et projets, j’ai développé des compétences solides en développement web et en déploiement cloud.
            </p>
            <p className="text-muted-foreground">
              En dehors du code, j’aime explorer les nouvelles technologies, contribuer à des projets open source et partager mes connaissances.
              Je crois en l’apprentissage continu et en la création de solutions qui ont un réel impact.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Spring Boot', 'Angular', 'Symfony', 'Docker', 'Kubernetes', 'OpenStack'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow glass-effect border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
