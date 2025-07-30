import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Gift, Star, Crown } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Escolha o Kit Perfeito para Sua Família
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme os momentos em família com nossos devocionais especiais. 
            Comece hoje mesmo a plantar sementes de fé no coração dos seus filhos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Kit Básico */}
          <Card className="relative border-2 border-border bg-gradient-basic shadow-soft hover:shadow-glow transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mx-auto mb-4">
                <Star className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Kit Básico</h3>
              <p className="text-muted-foreground">Para começar a jornada</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">R$ 17,00</div>
                <div className="text-sm text-muted-foreground">Pagamento único</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">50+ Desenhos para Colorir</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Histórias Bíblicas Ilustradas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Guia Básico para Pais</span>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <a href="https://go.paradisepagbr.com/1bcq7je0pp" target="_blank" rel="noopener noreferrer">
                  <Button variant="basic" size="lg" className="w-full">
                    Quero o Kit Básico
                  </Button>
                </a>
              </div>

              <div className="text-center space-y-1 text-sm text-muted-foreground">
                <p>✅ Entrega imediata</p>
                <p>✅ Garantia de 7 dias</p>
              </div>
            </CardContent>
          </Card>

          {/* Kit Completo - Premium */}
          <Card className="relative border-2 border-primary bg-gradient-premium shadow-premium hover:shadow-premium hover:scale-105 transition-all duration-300 z-10">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-glow">
                🔥 MAIS POPULAR
              </div>
            </div>
            
            <CardHeader className="text-center pb-4 pt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mx-auto mb-4">
                <Crown className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-white">Kit Completo</h3>
              <p className="text-white/90">Experiência completa para toda família</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">R$ 27,00</div>
                <div className="text-sm text-white/80">Menos de R$ 0,08 por dia</div>
                <div className="text-xs text-white/70 mt-1">
                  <span className="line-through">R$ 47,00</span> • Desconto de 42%
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-300" />
                  <span className="text-white">365 Devocionais Diários</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-300" />
                  <span className="text-white">50+ Desenhos para Colorir</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-300" />
                  <span className="text-white">Planner Familiar Completo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-300" />
                  <span className="text-white">Guia Avançado para Pais</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gift className="w-5 h-5 text-yellow-300" />
                  <span className="text-white font-semibold">Bônus: Playlist de Músicas Cristãs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gift className="w-5 h-5 text-yellow-300" />
                  <span className="text-white font-semibold">Bônus: Atividades Extras</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-white/90 text-sm font-medium">
                  🎁 Oferta Especial de Lançamento
                </p>
                <p className="text-white/70 text-xs mt-1">
                  Por tempo limitado
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a href="https://go.paradisepagbr.com/hp6rdsvtdx" target="_blank" rel="noopener noreferrer">
                  <Button variant="premium" size="lg" className="w-full text-lg py-4 bg-white text-green-700 hover:bg-white/90 hover:text-green-800 font-bold shadow-xl">
                    🚀 Quero o Kit Completo
                  </Button>
                </a>
              </div>

              <div className="text-center space-y-1 text-sm text-white/80">
                <p>✅ Entrega imediata por email</p>
                <p>✅ Garantia de 7 dias</p>
                <p>✅ Suporte completo</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 space-y-6">
          <p className="text-muted-foreground text-lg">
            Mais de 1.900 famílias já estão transformando seus momentos em família
          </p>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Avaliação 4.9/5 baseada em mais de 780 reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
