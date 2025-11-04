export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-7xl md:text-8xl font-black mb-6 text-slate-900">
          Ícaro <span className="text-slate-700">Codes</span>
        </h1>
        <p className="text-2xl md:text-3xl text-slate-700 mb-8 font-light">
          Desenvolvedor Full Stack & Designer
        </p>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          Transformo ideias em experiências digitais extraordinárias
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg">
            Ver Projetos
          </button>
          <button className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-slate-900/20 rounded-full font-semibold hover:bg-white/70 transition-all duration-300">
            Contato
          </button>
        </div>
      </div>
    </section>
  );
}
