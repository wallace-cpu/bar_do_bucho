import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Beer, GlassWater, Snowflake, Sparkles } from 'lucide-react';

const Drinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const drinks = [
    {
      icon: Beer,
      title: 'Cervejas Geladas',
      description: 'Pilsen, Lager, Weiss e muito mais. Sempre na temperatura ideal para você.',
      items: ['Brahma', 'Skol', 'Antarctica', 'Heineken', 'Budweiser', 'Corona'],
      color: 'amber',
    },
    {
      icon: GlassWater,
      title: 'Refrigerantes',
      description: 'Opções para toda a família, sempre gelados e refrescantes.',
      items: ['Coca-Cola', 'Guaraná', 'Fanta', 'Sprite', 'Água', 'Suco Natural'],
      color: 'cyan',
    },
  ];

  return (
    <section id="bebidas" className="py-24 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 neon-line" />

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Bebidas
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-amber text-glow-amber">Extremamente</span>{' '}
            <span className="gradient-text">Geladas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nada melhor que uma bebida gelada para acompanhar nossas porções
          </p>
        </motion.div>

        {/* Drinks Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {drinks.map((drink, index) => (
            <motion.div
              key={drink.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 group hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Floating snowflakes */}
              <motion.div
                className="absolute top-4 right-4 text-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <Snowflake className="w-8 h-8" />
              </motion.div>

              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-xl ${drink.color === 'amber' ? 'bg-accent/10' : 'bg-primary/10'} group-hover:scale-110 transition-transform`}>
                  <drink.icon className={`w-8 h-8 ${drink.color === 'amber' ? 'text-accent' : 'text-primary'}`} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {drink.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {drink.description}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {drink.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-full bg-muted/50 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

              {/* Temperature badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary">Super Gelada</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Drinks;
