import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, User, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nome é obrigatório').max(100, 'Nome muito longo'),
  phone: z.string().trim().min(1, 'Telefone é obrigatório').max(20, 'Telefone inválido'),
  message: z.string().trim().min(1, 'Mensagem é obrigatória').max(1000, 'Mensagem muito longa'),
});

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      contactSchema.parse(formData);
      setIsSubmitting(true);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSuccess(true);
      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
      });

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: '', phone: '', message: '' });
        setIsSuccess(false);
      }, 2000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 neon-line" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Contato
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Fale{' '}
            <span className="gradient-text">Conosco</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dúvidas, sugestões ou reservas? Entre em contato pelo formulário abaixo
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <User className="w-4 h-4 text-primary" />
                Nome
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                className={`w-full px-4 py-3 rounded-lg bg-muted/50 border ${
                  errors.name ? 'border-destructive' : 'border-border/50'
                } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <Phone className="w-4 h-4 text-primary" />
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                className={`w-full px-4 py-3 rounded-lg bg-muted/50 border ${
                  errors.phone ? 'border-destructive' : 'border-border/50'
                } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
              />
              {errors.phone && (
                <p className="text-sm text-destructive mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escreva sua mensagem..."
                rows={4}
                className={`w-full px-4 py-3 rounded-lg bg-muted/50 border ${
                  errors.message ? 'border-destructive' : 'border-border/50'
                } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none`}
              />
              {errors.message && (
                <p className="text-sm text-destructive mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting || isSuccess}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-lg font-display font-semibold text-lg uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 ${
                isSuccess
                  ? 'bg-green-500 text-white'
                  : 'neon-button-magenta border-2'
              }`}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-6 h-6 border-2 border-current border-t-transparent rounded-full"
                />
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-6 h-6" />
                  Enviado!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
