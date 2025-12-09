import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'Next.js', level: 85 },
    ],
  },
  {
    title: 'Styling',
    skills: [
      { name: 'Tailwind CSS', level: 95 },
      { name: 'CSS3/SCSS', level: 90 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Styled Components', level: 80 },
      { name: 'Material UI', level: 85 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Figma', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'Testing', level: 80 },
    ],
  },
];

const technologies = [
  'React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 
  'Node.js', 'Redux', 'Git', 'Figma', 'Vite'
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
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
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            WHAT I <span className="text-gradient">DO</span>?
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.15 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full gradient-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
            Technologies I Work With
          </h3>
          <div className="overflow-hidden relative py-6">
            <div className="flex whitespace-nowrap animate-scroll">
              {[...technologies, ...technologies].map((tech, index) => (
                <span
                  key={index}
                  className="mx-6 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors cursor-default inline-block"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 25s linear infinite;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
};
