
import { Helmet } from 'react-helmet-async';
import { Footer } from '../components/portfolio/Footer';
import { Navbar } from '../components/portfolio/Navbar';
import { Hero } from '../components/portfolio/Hero';
import { About } from '../components/portfolio/About';
import { Skills } from '../components/portfolio/Skills';
import { Projects } from '../components/portfolio/Projects';
import { Contact } from '../components/portfolio/Contact';


const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Frontend Developer Portfolio | React & TypeScript Expert</title>
        <meta 
          name="description" 
          content="Creative frontend developer specializing in React, TypeScript, and modern web technologies. View my projects and get in touch for your next web application." 
        />
        <meta name="keywords" content="frontend developer, react developer, typescript, web developer, portfolio" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
