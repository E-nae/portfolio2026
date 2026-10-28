import { Navbar } from '@/widgets/navbar';
import { Hero } from '@/widgets/hero';
import { ProjectList } from '@/widgets/project-list';
import { TechStack } from '@/widgets/tech-stack';
import { About } from '@/widgets/about';
import { Footer } from '@/widgets/footer';

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectList />
        <TechStack />
        <About />
      </main>
      <Footer />
    </>
  );
}
