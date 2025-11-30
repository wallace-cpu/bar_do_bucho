import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Specialties from '@/components/Specialties';
import Drinks from '@/components/Drinks';
import Menu from '@/components/Menu';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(hsl(180 100% 50% / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, hsl(180 100% 50% / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Gradient orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, hsl(180 100% 50% / 0.15), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, hsl(320 100% 60% / 0.15), transparent 70%)',
            filter: 'blur(60px)',
            animationDelay: '1s',
          }}
        />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Specialties />
        <Drinks />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
