import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Utensils, Beer, GlassWater, Flame } from 'lucide-react';

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  highlight?: boolean;
}

interface MenuCategory {
  title: string;
  icon: typeof Utensils;
  items: MenuItem[];
  color: 'cyan' | 'magenta' | 'amber';
}

const menuData: MenuCategory[] = [
  {
    title: 'Porções Especiais',
    icon: Flame,
    color: 'amber',
    items: [
      { name: 'Dobradinha com Mocotó', description: 'Porção generosa', highlight: true },
      { name: 'Fígado Acebolado', description: 'Com cebolas caramelizadas', highlight: true },
      { name: 'Contra Filé na Chapa', description: 'Corte nobre, 400g', highlight: true },
      { name: 'Feijão Tropeiro', description: 'Receita tradicional mineira', highlight: true },
      { name: 'Torresmo', description: 'Crocante e sequinho' },
      { name: 'Linguiça Acebolada', description: 'Na chapa' },
    ],
  },
  {
    title: 'Petiscos',
    icon: Utensils,
    color: 'cyan',
    items: [
      { name: 'Batata Frita', description: 'Porção grande' },
      { name: 'Mandioca Frita', description: 'Com carne seca' },
      { name: 'Calabresa Acebolada', description: 'Defumada' },
      { name: 'Frango à Passarinho', description: 'Crocante' },
      { name: 'Porção Mista', description: 'Um pouco de tudo' },
    ],
  },
  {
    title: 'Cervejas',
    icon: Beer,
    color: 'amber',
    items: [
      { name: 'Brahma Chopp', description: '600ml' },
      { name: 'Skol', description: '600ml' },
      { name: 'Antarctica', description: '600ml' },
      { name: 'Heineken', description: 'Long Neck' },
      { name: 'Budweiser', description: 'Long Neck' },
      { name: 'Corona', description: 'Long Neck' },
    ],
  },
  {
    title: 'Bebidas',
    icon: GlassWater,
    color: 'magenta',
    items: [
      { name: 'Coca-Cola', description: 'Lata ou 2L' },
      { name: 'Guaraná Antarctica', description: 'Lata ou 2L' },
      { name: 'Fanta', description: 'Laranja ou Uva' },
      { name: 'Água Mineral', description: 'Com ou sem gás' },
      { name: 'Suco Natural', description: 'Laranja ou Limão' },
    ],
  },
];

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

  const getColorClasses = (color: 'cyan' | 'magenta' | 'amber', active: boolean) => {
    const baseClasses = {
      cyan: {
        bg: active ? 'bg-primary' : 'bg-primary/10',
        text: active ? 'text-primary-foreground' : 'text-primary',
        border: 'border-primary/30',
      },
      magenta: {
        bg: active ? 'bg-secondary' : 'bg-secondary/10',
        text: active ? 'text-secondary-foreground' : 'text-secondary',
        border: 'border-secondary/30',
      },
      amber: {
        bg: active ? 'bg-accent' : 'bg-accent/10',
        text: active ? 'text-accent-foreground' : 'text-accent',
        border: 'border-accent/30',
      },
    };
    return baseClasses[color];
  };

  return (
    <section id="cardapio" className="py-24 relative overflow-hidden">
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
            Cardápio Completo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Tudo que você{' '}
            <span className="gradient-text">precisa</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Navegue pelo nosso cardápio e descubra todas as delícias que preparamos para você
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {menuData.map((category, index) => {
            const colors = getColorClasses(category.color, activeCategory === index);
            return (
              <button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border ${colors.border} ${colors.bg} ${colors.text} font-medium transition-all duration-300 hover:scale-105`}
              >
                <category.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              {(() => {
                const Icon = menuData[activeCategory].icon;
                return <Icon className="w-6 h-6 text-primary" />;
              })()}
              {menuData[activeCategory].title}
            </h3>

            <div className="space-y-4">
              {menuData[activeCategory].items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 hover:bg-muted/50 group ${
                    item.highlight ? 'border-l-2 border-accent' : ''
                  }`}
                >
                  <div className="flex-1">
                    <h4 className={`font-semibold ${item.highlight ? 'text-accent' : 'text-foreground'} group-hover:text-primary transition-colors`}>
                      {item.name}
                    </h4>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.highlight && (
                    <span className="ml-4 px-2 py-1 rounded text-xs font-medium bg-accent/10 text-accent">
                      Destaque
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
