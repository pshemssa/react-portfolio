import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';


const projects = [
  {
    id: 1,
    title: 'Inshuti YUmubyeyi Platform',
    category: 'Featured',
    description: 'A supportive platform dedicated to disadvantaged pregnant women, offering community groups, training programs, and marketplace access to boost confidence and skills.',
    image: '/women.JPG',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://her-dun.vercel.app/',
    githubUrl: 'https://github.com/pshemssa/Her',
    caseStudy: {
      challenge: 'Supporting disadvantaged pregnant women with accessible resources.',
      solution: 'Built community support groups, skills training modules, and integrated marketplace.',
      result: 'Empowered women with confidence and practical skills for better futures.',
    },
  },
  {
    id: 2,
    title: 'Movie Explorer',
    category: 'Entertainment',
    description: 'A dynamic movie discovery platform with search functionality, detailed movie information, and personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
    technologies: ['React', 'API', 'CSS'],
    liveUrl: 'https://beautiful-beijinho-e75178.netlify.app/',
    githubUrl: 'https://github.com/pshemssa/MovieExplorer',
    caseStudy: {
      challenge: 'Creating an intuitive movie discovery experience.',
      solution: 'Integrated movie database API, search and filter functionality, and responsive design.',
      result: 'Seamless movie browsing experience with rich content details.',
    },
  },
  {
    id: 3,
    title: 'Book Explorer',
    category: 'Education',
    description: 'An interactive book discovery platform for browsing, searching, and exploring books with detailed information and reviews.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80',
    technologies: ['React', 'API', 'Tailwind CSS'],
    liveUrl: 'https://bookexplorerr.netlify.app/',
    githubUrl: 'https://github.com/pshemssa/Frontend_Phase1_Capstone',
    caseStudy: {
      challenge: 'Building an engaging book discovery platform.',
      solution: 'Book search API integration, detailed book information display, and user-friendly interface.',
      result: 'Enhanced book discovery with comprehensive information and smooth navigation.',
    },
  },
  {
    id: 4,
    title: 'Mediguard',
    category: 'Healthcare',
    description: 'Empowering healthcare professionals with cybersecurity awareness and training to protect sensitive patient data.',
    image: '/book.jpg',
    technologies: ['Flutter', 'Firebase'],
    liveUrl: '#',
    githubUrl: 'https://github.com/pshemssa/Mediguard-Frontend/tree/master',
    caseStudy: {
      challenge: 'Protecting sensitive patient data in healthcare systems.',
      solution: 'Security training modules, real-time threat alerts, and compliance tracking.',
      result: 'Enhanced cybersecurity awareness among healthcare professionals.',
    },
  },
  {
    id: 5,
    title: 'Learning Platform',
    category: 'Education',
    description: 'Interactive online learning platform with course management, progress tracking, and certification system.',
    image: '/comp.jpg',
    technologies: ['React', 'Node.js'],
    liveUrl: '#',
    githubUrl: 'https://github.com/pshemssa',
    caseStudy: {
      challenge: 'Creating an engaging online learning experience.',
      solution: 'Course catalog & enrollment, progress tracking dashboard, and interactive quizzes.',
      result: 'Improved learning outcomes with interactive and trackable courses.',
    },
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    category: 'Web App',
    description: 'Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: '/weatherr.jpeg',
    technologies: ['JavaScript', 'API', 'HTML/CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/pshemssa/travel-planner',
    caseStudy: {
      challenge: 'Providing accurate real-time weather information.',
      solution: 'Real-time weather data, 7-day forecast, and location search with geolocation.',
      result: 'Reliable weather forecasts with intuitive user interface.',
    },
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 section-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            FEATURED <span className="text-gradient">PROJECTS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in frontend development,
            UI/UX design, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => {
              const container = document.querySelector('#projects-carousel');
              container?.scrollBy({ left: -400, behavior: 'smooth' });
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary/20 hover:bg-primary/40 text-primary backdrop-blur-sm transition-all"
            aria-label="Previous projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button
            onClick={() => {
              const container = document.querySelector('#projects-carousel');
              container?.scrollBy({ left: 400, behavior: 'smooth' });
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary/20 hover:bg-primary/40 text-primary backdrop-blur-sm transition-all"
            aria-label="Next projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
          <div id="projects-carousel" className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" style={{ scrollBehavior: 'smooth' }}>
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[calc(50%-1rem)] snap-start"
              >
              {/* Project Image */}
              <div className="relative h-56 md:h-64 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-50"
                  onError={(e) => {
                    e.currentTarget.src = '/comp.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                  {project.category}
                </span>

                {/* Hover Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80">
                  {project.liveUrl !== '#' && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-primary text-primary-foreground"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-secondary text-secondary-foreground"
                    title="View Code"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Case Study Preview */}
                <div className="pt-4 border-t border-border">
                  <details className="group/details">
                    <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-primary hover:text-primary/80">
                      View Case Study
                      <ArrowRight size={16} className="transition-transform group-open/details:rotate-90" />
                    </summary>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 space-y-3 text-sm"
                    >
                      <div>
                        <span className="font-semibold text-foreground">Challenge:</span>
                        <p className="text-muted-foreground">{project.caseStudy.challenge}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Solution:</span>
                        <p className="text-muted-foreground">{project.caseStudy.solution}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Result:</span>
                        <p className="text-primary">{project.caseStudy.result}</p>
                      </div>
                    </motion.div>
                  </details>
                </div>
              </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const container = document.querySelector('#projects-carousel');
              container?.scrollBy({ left: 400, behavior: 'smooth' });
            }}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
           scroll to view more projects
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
