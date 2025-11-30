import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Star } from 'lucide-react';

interface Specialty {
  name: string;
  description: string;
  highlight: string;
  color: 'cyan' | 'magenta' | 'amber';
}

const specialties: Specialty[] = [
  {
    name: 'Dobradinha com Mocotó',
    description: 'A combinação perfeita de sabores. Dobradinha macia e mocotó suculento, cozidos lentamente com temperos especiais.',
    highlight: 'Mais Pedido',
    color: 'amber',
  },
  {
    name: 'Fígado Acebolado',
    description: 'Fígado bovino grelhado no ponto, acompanhado de cebolas caramelizadas e temperos da casa.',
    highlight: 'Clássico',
    color: 'magenta',
  },
  {
    name: 'Contra Filé',
    description: 'Corte nobre, suculento e macio. Grelhado no ponto que você preferir, acompanhado de farofa especial.',
    highlight: 'Premium',
    color: 'cyan',
  },
  {
    name: 'Feijão Tropeiro',
    description: 'Receita tradicional mineira com feijão, farinha, bacon, linguiça, ovos e temperos especiais.',
    highlight: 'Tradicional',
    color: 'amber',
  },
];

const Specialties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getColorClasses = (color: 'cyan' | 'magenta' | 'amber') => {
    switch (color) {
      case 'cyan':
        return {
          border: 'hover:border-primary/50',
          text: 'text-primary',
          glow: 'group-hover:box-glow-cyan',
          bg: 'bg-primary/10',
        };
      case 'magenta':
        return {
          border: 'hover:border-secondary/50',
          text: 'text-secondary',
          glow: 'group-hover:box-glow-magenta',
          bg: 'bg-secondary/10',
        };
      case 'amber':
        return {
          border: 'hover:border-accent/50',
          text: 'text-accent',
          glow: 'group-hover:box-glow-amber',
          bg: 'bg-accent/10',
        };
    }
  };

  return (
    <section id="especialidades" className="py-24 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 neon-line" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Nossas Especialidades
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Porções que fazem{' '}
            <span className="gradient-text">história</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada prato é preparado com ingredientes selecionados e muito carinho
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {specialties.map((specialty, index) => {
            const colors = getColorClasses(specialty.color);
            return (
              <motion.div
                key={specialty.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`glass-card p-8 group ${colors.border} ${colors.glow} transition-all duration-500 cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${colors.bg}`}>
                    <Flame className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${colors.bg}`}>
                    <Star className={`w-3 h-3 ${colors.text}`} />
                    <span className={`text-xs font-medium ${colors.text}`}>
                      {specialty.highlight}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {specialty.name}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {specialty.description}
                </p>

                {/* Hover effect line */}
                <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
