export default function ProjectsSections() {
  const projects = [
    {
      title: "Fake Store API",
      description: "Aplicação eCommerce completa consumindo Fake Store API",
      tech: ["JavaScript", "React", "API"],
      link: "https://github.com/icaroCodes/fakeStoreApi"
    },
    {
      title: "Node Express API",
      description: "API RESTful desenvolvida com Node.js, Express e MySQL",
      tech: ["Node.js", "Express", "MySQL"],
      link: "https://github.com/icaroCodes/nodeExpress"
    },
    {
      title: "ToDo List",
      description: "Aplicação de tarefas utilizando todos os hooks do React",
      tech: ["React", "Hooks", "JavaScript"],
      link: "https://github.com/icaroCodes/ToDoList"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-slate-900">
            Projetos
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi durante minha jornada
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-3 text-slate-900">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-900 text-white text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 font-semibold hover:text-slate-700 transition-colors inline-flex items-center gap-2"
              >
                Ver no GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

