"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { projects } from '@/assets/projects';
import ProjectCard from '@/components/ProjectCard';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100">
      <Navbar />
      <Hero />
      
      {/* Projects Section */}
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

      <Skills />
      
      {/* Simple About Section */}
      <section id="about" className="py-32 bg-gray-900 text-white">
        <div className="container px-8 mx-auto text-center max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold">About Me</h2>
          <p className="text-xl leading-relaxed text-gray-300">
            "좋은 디자인은 사용자를 춤추게 한다"는 마음으로 개발합니다. <br/>
            복잡한 문제를 기술적으로 해결할 때 희열을 느끼며, 
            언제나 새로운 기술을 배우고 적용하는 것을 즐깁니다.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}