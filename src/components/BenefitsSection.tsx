import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Star, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Fortalece os Vínculos Familiares",
      description: "Crie momentos especiais de conexão entre pais e filhos através da fé compartilhada."
    },
    {
      icon: Clock,
      title: "Rotina Espiritual Consistente",
      description: "Estabeleça uma rotina diária de crescimento espiritual que se adapta ao ritmo da sua família."
    },
    {
      icon: Star,
      title: "Desenvolvimento Integral",
      description: "Contribui para o desenvolvimento emocional, social e espiritual das crianças."
    },
    {
      icon: Shield,
      title: "Base Sólida de Valores",
      description: "Transmita valores cristãos fundamentais de forma natural e envolvente."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Por que Escolher Pequenos de Fé?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais do que um simples devocional, é uma ferramenta completa para 
            formar uma geração que conhece e ama a Deus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-soft bg-background/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-8 shadow-glow">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              "E estas palavras que hoje te ordeno estarão no teu coração; 
              e as intimarás a teus filhos..."
            </h3>
            <p className="text-muted-foreground italic">
              Deuteronômio 6:6-7
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pequenos de Fé foi criado com o coração de ajudar pais a cumprirem 
              este mandamento bíblico de forma prática, criativa e envolvente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;