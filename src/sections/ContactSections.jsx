export default function ContactSections() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/icaroCodes",
      icon: "💻"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/programmericaro",
      icon: "📷"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@icaroCodes",
      icon: "🎥"
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-4 text-slate-900">
          Contato
        </h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Vamos conversar sobre seu próximo projeto?
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-12 shadow-xl">
          <p className="text-lg text-slate-700 mb-8">
            Estou sempre aberto a colaborações e novos projetos. 
            Entre em contato através das minhas redes sociais:
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span className="text-2xl">{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
          
          <div className="border-t border-slate-200 pt-8 mt-8">
            <p className="text-slate-600 mb-2">📍 Fortaleza-CE, Brasil</p>
            <p className="text-slate-600">Sempre aprendendo e evoluindo! 🚀</p>
          </div>
        </div>
      </div>
    </section>
  );
}

