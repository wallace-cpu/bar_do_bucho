import { motion } from 'framer-motion';
import { Beer, MapPin, Clock, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
  ];

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 neon-line" />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Beer className="w-10 h-10 text-primary" />
              <span className="font-display font-bold text-2xl text-foreground">
                Bar do Bucho
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Tradição, sabor e ambiente aconchegante. O melhor lugar para encontrar os amigos 
              e saborear porções incomparáveis com cerveja sempre gelada.
            </p>
          </motion.div>

          {/* Location & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display font-semibold text-lg text-foreground mb-6">
              Localização & Horário
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Endereço</p>
                  <p className="text-muted-foreground text-sm">
                    Rua das Porções, 123<br />
                    Centro - São Paulo, SP
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Horário de Funcionamento</p>
                  <p className="text-muted-foreground text-sm">
                    Terça a Domingo<br />
                    17h às 00h
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Telefone</p>
                  <p className="text-muted-foreground text-sm">
                    (11) 99999-9999
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-lg text-foreground mb-6">
              Redes Sociais
            </h3>
            <p className="text-muted-foreground mb-6">
              Siga-nos e fique por dentro das novidades e promoções especiais.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full border border-border/50 bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bar do Bucho. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Feito com <span className="text-secondary">♥</span> e muita cerveja gelada
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
