export default function ServicesSections() {
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Criação de sites e aplicações web modernas e responsivas",
      icon: "🌐"
    },
    {
      title: "Desenvolvimento Full Stack",
      description: "Soluções completas do frontend ao backend",
      icon: "💻"
    },
    {
      title: "UI/UX Design",
      description: "Interfaces intuitivas e experiências digitais extraordinárias",
      icon: "🎨"
    },
    {
      title: "Consultoria Tech",
      description: "Orientações estratégicas para seu projeto digital",
      icon: "🚀"
    }
  ];

  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-slate-900">
            Serviços
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Soluções completas para transformar suas ideias em realidade
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

