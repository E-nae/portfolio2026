import { projects, ProjectCard } from '@/entities/project';

export function ProjectList() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto max-w-[1200px] px-5 pb-16 sm:px-10 lg:px-16 lg:pb-30"
    >
      <h2 id="projects-title" className="mb-2 text-[clamp(28px,3vw,40px)] font-bold tracking-[-0.03em]">
        받았던 질문들
      </h2>
      <p className="mb-8 text-[17px] text-muted md:mb-14">
        질문마다 직접 만들어서 답했습니다. 데모와 코드를 바로 열어볼 수 있어요.
      </p>

      <div className="border-b border-line">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
