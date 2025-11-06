export default function SkillsSections() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "MySQL", "REST APIs"]
    },
    {
      category: "Ferramentas",
      skills: ["Git", "GitHub", "Vite", "Figma"]
    },
    {
      category: "Conhecimentos",
      skills: ["Full Stack", "UI/UX", "Responsive Design", "Clean Code"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-slate-900">
            Habilidades
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tecnologias e ferramentas que uso no dia a dia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-3xl font-bold mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

