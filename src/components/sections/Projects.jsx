
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
const projects = [
  
{
  title: 'Immuncare',
  description:
    "Plateforme MERN (MongoDB, Express, React, Node.js) dédiée aux maladies auto-immunes telles que le lupus, le sida et la sclérose en plaques. Elle facilite l’interaction entre patients, médecins et chercheurs grâce à des fonctionnalités avancées de suivi, d’analyse médicale et de gestion des consultations. Le projet inclut un pipeline CI/CD complet (Jenkins, Docker, Kubernetes) et un monitoring via Prometheus & Grafana.",
  image: "/Image/immuncare.png",
  technologies: [
    'MongoDB',
    'Express',
    'React',
    'Node.js',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'SonarQube',
    'Prometheus',
    'Grafana',
    'Stripe',
    'Nginx',
    'CentOS'
  ],
    liveUrl: 'https://www.linkedin.com/posts/asma-boussaada_pr%C3%A9sentation-de-mon-projet-mern-stack-activity-7391977444766892033-ZFEL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3RDdMB8MFhymwcy4xqrFha_pEh8kF0PrE',
  githubUrl: 'https://github.com/asmabsd/immuncare',
},
  {
  title: 'Smart Lost & Found',
  description:
    "Plateforme intelligente de gestion d’objets perdus et trouvés, basée sur une architecture microservices (Spring Boot + Angular). Intègre une IA pour la correspondance image/texte, une gestion des réclamations, et un chatbot. Déploiement sur Azure Container Apps avec Eureka, API Gateway, Config Server, MySQL, Prometheus & Grafana.",
  image: "/Image/smart-lost-found.png",
  technologies: [
    'Spring Boot',
    'Angular',
    'MySQL',
    'Docker',
    'Azure',
    'Microservices',
    'Eureka',
    'Python',
    'Gemini AI',

    'TensorFlow'
  ],
  liveUrl: 'https://www.linkedin.com/posts/asma-boussaada_demo-smart-lost-found-un-projet-activity-7359235162091442177-CCGx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3RDdMB8MFhymwcy4xqrFha_pEh8kF0PrE', 
  githubUrl: 'https://github.com/asmabsd/microservices_lostandfound' ,

}
,
  {
    title: 'Smart Tourism Platform (Mallatrip)',
    description:
      "Développement d’une plateforme cloud de gestion touristique avec réservation, recommandations et gestion des partenaires. Déploiement sur Microsoft Azure et OpenStack avec Docker, supervision Prometheus & Grafana, et personnalisation par IA.",
    image: "/Image/mallatrip.png",
    technologies: ['Spring Boot', 'Angular', 'MySQL', 'Azure', 'OpenStack', 'Docker', 'Prometheus', 'Grafana'],
    liveUrl: 'https://www.linkedin.com/posts/asma-boussaada_ai-tourismtech-azure-activity-7329491023213019136-8rkJ',
    githubUrl: 'https://github.com/asmabsd/angular_template/branches'
  },
  {
    title: 'Stage Symfony – ScriptZenit (France)',
    description:
      "Stage en ligne durant l’été 2024 : Conception et développement d’un CRM métier avec Symfony 5. Modules dynamiques, sécurité, architecture MVC et intégration backend.",
    image: '/Image/symfony_crm.jpg',
    technologies: ['Symfony 5', 'PHP', 'MySQL', 'Bootstrap', 'MVC'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'SkillHub – PIDEV',
    description:
      "Plateforme de freelancing web développée avec Symfony et application desktop avec JavaFX, toutes deux connectées à une base MySQL partagée. Gestion des missions, paiements, profils, etc.",
    image: "/Image/skillhub.jpg", 
    technologies: ['Symfony', 'JavaFX', 'MySQL'],
    liveUrl: 'https://github.com/asmabsd/PIDEV-WEB-MOBILE-DESKTOP/blob/main/README.md',
    githubUrl: 'https://github.com/asmabsd/PIDEV-WEB-MOBILE-DESKTOP'
  },
  {
    title: 'TheBeautyParlour – Site e-commerce',
    description:
      "Site responsive pour la vente de produits de maquillage, conçu en HTML/CSS/JavaScript. Interface simple, intégration panier, hébergé sur GitHub.",
    image: "/Image/hhh1.jpg",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://github.com/asmabsd/site-vente-makeup-/blob/master/README.md',
    githubUrl: 'https://github.com/asmabsd/site-vente-makeup-'
  }
  ,
  {
    title: 'PollPro – Application Élections',
    description:
      "Application desktop GTK+ développée en langage C sous Linux pour la gestion électronique d’élections. Gestion des électeurs, résultats, affichage graphique et sécurité simple.",
    image: "/Image/pollpro.jpg",
    technologies: ['C', 'GTK+', 'Linux'],
    liveUrl: '#',
    githubUrl: 'https://github.com/asmabsd/Projet_C'
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
        Voici quelques-uns de mes projets récents qui illustrent mes compétences et ma passion pour la création de solutions numériques innovantes.


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
