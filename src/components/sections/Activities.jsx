
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Trophy, Heart, Lightbulb } from 'lucide-react';

const activities = [
  {
    
  }
];

export function Activities() {
  return (
    <section id="activities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Extracurricular Activities</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond coding, I'm actively involved in the tech community, contributing to meaningful 
            causes and helping others grow in their development journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 glass-effect border-primary/20 group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img  
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                     src={activity.image} />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{activity.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-primary">{activity.organization}</p>
                      <p>{activity.period}</p>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground">{activity.description}</p>
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