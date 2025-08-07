
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award } from 'lucide-react';

const certifications = [
 
  // autres certifications...
  {
    title: 'CCNA : Commutation, Routage et Essentiels des Réseaux Sans Fil',
    issuer: 'Cisco',
    date: '11 septembre 2024',
    image: 'ccna.jpg',
    verifyUrl: 'https://www.credly.com/badges/e93c1ad8-b745-409a-a800-c80c1e817eb7',
    description: `Ce badge a été délivré à Asma Boussaada. Cisco atteste que le titulaire de ce badge a réussi le cours 
    "Switching, Routing, and Wireless Essentials" et a obtenu cette certification de niveau étudiant. 
    La personne certifiée possède des bases solides en opérations de commutation, en configuration de LAN filaires 
    et sans fil selon les bonnes pratiques de sécurité, et en protocoles de redondance. Elle a développé des compétences 
    en résolution de problèmes, participé à environ 45 activités pratiques, et cumulé jusqu’à 21 heures de laboratoires 
    sur matériel Cisco et/ou avec l’outil Cisco Packet Tracer.`
  }

];

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuous learning is key to staying current in technology. Here are my professional 
            certifications that validate my expertise across various platforms and technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 glass-effect border-primary/20 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img  
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={cert.image}
                   src="https://images.unsplash.com/photo-1702306257239-52fac9e29b79" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {cert.date}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  
                  <div className="space-y-2">
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Verify Certificate
                    </Button>
                    </a>
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
