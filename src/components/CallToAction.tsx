import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Gift } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Comece Hoje a Jornada de Fé da Sua Família
          </h2>
          <p className="text-xl text-muted-foreground">
            Não perca mais tempo! Cada dia é uma oportunidade de plantar sementes 
            de fé no coração dos seus filhos.
          </p>
        </div>

        <Card className="border-none shadow-glow bg-gradient-secondary">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Kit Completo Pequenos de Fé
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">365 Devocionais Diários</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">50+ Desenhos para Colorir</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Planner Familiar Completo</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Guia para os Pais</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Gift className="w-5 h-5 text-accent-foreground" />
                      <span className="text-foreground font-semibold">Bônus: Playlist de Músicas Infantis Cristãs</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-primary">R$ 47,00</div>
                    <div className="text-sm text-muted-foreground">
                      Menos de R$ 0,13 por dia de devocional
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-foreground text-center">
                    🎁 Oferta Especial de Lançamento
                  </h4>
                  <p className="text-muted-foreground text-center text-sm">
                    Garante seu kit com desconto especial por tempo limitado
                  </p>
                </div>

                <div className="space-y-4">
                  <Button variant="hero" size="lg" className="w-full text-lg py-4">
                    Quero Meu Kit Completo
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Ver Exemplo Gratuito
                  </Button>
                </div>

                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    ✅ Entrega imediata por email
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ✅ Garantia de 30 dias
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ✅ Suporte completo
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Mais de 1.000 famílias já estão transformando seus momentos em família
          </p>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;