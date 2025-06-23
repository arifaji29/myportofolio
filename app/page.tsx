import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import GraphicProjects from '@/components/GraphicProjects';
import UiUxProjects from '@/components/UiUxProjects';
import WebDevProjects from '@/components/WebDevProjects';
import Contact from '@/components/Contact';

const page = () => {
  return (
    <main>
      <Hero/>
      <About/>
      <Skills/>
     {/* Ganti <Projects /> dengan 3 section di bawah ini */}
      <GraphicProjects />
      <UiUxProjects />
      <WebDevProjects />
      <Contact/>
    </main>
  )
}

export default page