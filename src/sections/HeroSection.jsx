export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-7xl md:text-8xl font-black mb-6 text-slate-900">
          Ícaro <span className="text-slate-700">Codes</span>
        </h1>
        <p className="text-2xl md:text-3xl text-slate-700 mb-8 font-light">
          Desenvolvedor Full Stack
        </p>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          Converto visitas em clientes
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            onClick={() => {
              const element = document.getElementById("projects");
              if (element) {
                const headerOffset = 80;
                const bounceOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({ 
                  top: offsetPosition + bounceOffset, 
                  behavior: "smooth" 
                });
                
                setTimeout(() => {
                  window.scrollTo({ 
                    top: offsetPosition, 
                    behavior: "smooth" 
                  });
                }, 400);
              }
            }}
            className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg"
          >
            Ver Projetos
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                const headerOffset = 80;
                const bounceOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({ 
                  top: offsetPosition + bounceOffset, 
                  behavior: "smooth" 
                });
                
                setTimeout(() => {
                  window.scrollTo({ 
                    top: offsetPosition, 
                    behavior: "smooth" 
                  });
                }, 400);
              }
            }}
            className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-slate-900/20 rounded-full font-semibold hover:bg-white/70 transition-all duration-300"
          >
            Contato
          </button>
        </div>
      </div>
    </section>
  );
}