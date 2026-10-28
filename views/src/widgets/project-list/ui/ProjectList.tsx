import { projects, ProjectCard } from '@/entities/project';

export function ProjectList() {
  return (
    <section id="projects" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="mb-24 text-center">
        <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase">Selected Works</h2>
        <p className="mt-4 text-3xl font-bold text-gray-900">Recent Projects</p>
      </div>

      {/* 프로젝트 리스트 렌더링 */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
