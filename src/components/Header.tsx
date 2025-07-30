import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-foreground">
              Pequenos de Fé
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#produto" className="text-muted-foreground hover:text-foreground transition-colors">
              Produto
            </a>
            <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors">
              Benefícios
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>

          <Button variant="hero" size="sm">
            Quero Conhecer
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;