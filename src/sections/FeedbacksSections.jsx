export default function FeedbacksSections() {
  const feedbacks = [
    {
      name: "Cliente 1",
      role: "CEO, Empresa Tech",
      comment: "Trabalho excepcional! O Ícaro entregou além das expectativas com atenção aos detalhes e profissionalismo.",
      rating: 5
    },
    {
      name: "Cliente 2",
      role: "Startup Founder",
      comment: "Desenvolvedor muito talentoso e dedicado. Compreendeu perfeitamente nossa visão e transformou em código.",
      rating: 5
    },
    {
      name: "Cliente 3",
      role: "Designer",
      comment: "Colaboração perfeita! O resultado final superou todas as expectativas. Recomendo fortemente!",
      rating: 5
    }
  ];

  return (
    <section id="feedbacks" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-slate-900">
            Feedbacks
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            O que as pessoas dizem sobre meu trabalho
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(feedback.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "{feedback.comment}"
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-900">{feedback.name}</p>
                <p className="text-sm text-slate-600">{feedback.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

