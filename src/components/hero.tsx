import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-4 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.15] pointer-events-none fade-in-0"></div>

      {/* Gradient Blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-20"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-wider w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Open to Work
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Vishesh</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground/80">
              Software Developer
            </h2>
          </div>

          <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed">
            Motivated frontend developer with a strong foundation in React, modern CSS frameworks, and interactive UI design. Eager to apply practical skills in real-world projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#projects" className="inline-flex">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                View My Work
                <ArrowRight size={20} />
              </Button>
            </a>
            <a href="#contact" className="inline-flex">
              <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm border-2 hover:bg-background/80">Get In Touch</Button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Button variant="secondary" size="lg" className="h-12 px-8 text-base bg-secondary/80 hover:bg-secondary border-2 border-transparent">
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-foreground/40 font-medium tracking-wide">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
