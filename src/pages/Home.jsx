import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
