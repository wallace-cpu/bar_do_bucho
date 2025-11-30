import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Beer, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Beer,
      title: 'Cerveja Gelada',
      description: 'Sempre na temperatura perfeita',
    },
    {
      icon: Users,
      title: 'Ambiente Acolhedor',
      description: 'Para reunir amigos e família',
    },
    {
      icon: Clock,
      title: 'Anos de Tradição',
      description: 'Receitas passadas por gerações',
    },
    {
      icon: Heart,
      title: 'Feito com Amor',
      description: 'Cada prato é especial',
    },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 neon-line" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
              Sobre Nós
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Tradição que você{' '}
              <span className="gradient-text">pode saborear</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              O <strong className="text-foreground">Bar do Bucho</strong> é mais do que um bar — é um ponto de encontro 
              onde a tradição se mistura com sabores únicos. Conhecido pelas porções generosas e 
              bem servidas, nosso espaço aconchegante é o lugar perfeito para relaxar com os amigos 
              após um longo dia.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nossas especialidades como a famosa <span className="text-neon-amber">Dobradinha com Mocotó</span>, 
              o saboroso <span className="text-neon-magenta">Fígado</span>, o suculento{' '}
              <span className="text-primary">Contra Filé</span> e o autêntico{' '}
              <span className="text-neon-amber">Feijão Tropeiro</span> são preparados com receitas 
              que atravessam gerações.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
