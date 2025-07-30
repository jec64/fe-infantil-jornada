const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Pequenos de Fé</h3>
            <p className="text-primary-foreground/80">
              Fortalecendo famílias através da fé, uma história por vez.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Links Úteis</h4>
            <div className="space-y-2">
              <a href="#produto" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Sobre o Produto
              </a>
              <a href="#beneficios" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Benefícios
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Depoimentos
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>contato@pequenosdef.com.br</p>
              <p>WhatsApp: (11) 99999-9999</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Pequenos de Fé. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;