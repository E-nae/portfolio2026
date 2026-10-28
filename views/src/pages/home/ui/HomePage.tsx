import { Navbar } from '@/widgets/navbar';
import { Hero } from '@/widgets/hero';
import { ProjectList } from '@/widgets/project-list';
import { TechStack } from '@/widgets/tech-stack';
import { About } from '@/widgets/about';
import { Footer } from '@/widgets/footer';

export function HomePage() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100">
      <Navbar />
      <Hero />
      <ProjectList />
      <TechStack />
      <About />
      <Footer />
    </main>
  );
}
