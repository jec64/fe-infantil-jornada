import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Palette, Calendar, Heart } from "lucide-react";
import familyDevotionImage from "@/assets/family-devotion.jpg";
import coloringPagesImage from "@/assets/coloring-pages.jpg";

const ProductSection = () => {
  return (
    <section id="produto" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Um Kit Completo para a Família
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pequenos de Fé oferece tudo que você precisa para criar momentos especiais 
            de aprendizado e conexão espiritual com seus filhos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                O que você vai encontrar:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Book className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Devocionais Diários</h4>
                    <p className="text-muted-foreground">
                      365 devocionais adaptados para crianças, com linguagem simples e histórias envolventes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Palette className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Desenhos para Colorir</h4>
                    <p className="text-muted-foreground">
                      Mais de 50 desenhos das principais histórias bíblicas para colorir e aprender.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Planner Familiar</h4>
                    <p className="text-muted-foreground">
                      Guia completo para os pais organizarem e conduzirem os momentos devocionais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Momentos em Família</h4>
                    <p className="text-muted-foreground">
                      Atividades e reflexões que fortalecem os laços familiares através da fé.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden shadow-soft">
              <img 
                src={familyDevotionImage} 
                alt="Família em momento devocional" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-soft">
              <img 
                src={coloringPagesImage} 
                alt="Páginas para colorir" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center border-none shadow-soft bg-gradient-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Para Toda Família</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Adequado para crianças de 3 a 12 anos, com a participação dos pais
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-soft bg-gradient-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Fácil de Usar</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Material prático e organizado para momentos especiais sem complicação
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-soft bg-gradient-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Baseado na Bíblia</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Todos os conteúdos são fundamentados nas Escrituras Sagradas
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-soft bg-gradient-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Crescimento Espiritual</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Promove o desenvolvimento da fé e valores cristãos na família
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;