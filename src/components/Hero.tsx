import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-secondary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/40" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Pequenos de{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Fé
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                O devocional perfeito para guiar seus filhos em uma jornada de fé 
                através de histórias bíblicas, desenhos para colorir e um planner 
                especial para a família.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Começar Jornada de Fé
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Ver Exemplo
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">365</div>
                <div className="text-sm text-muted-foreground">Dias de Devocionais</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Desenhos para Colorir</div>
              </div>
              <div className="text-center col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-primary">1</div>
                <div className="text-sm text-muted-foreground">Planner Familiar</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Crianças lendo a Bíblia juntas" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;