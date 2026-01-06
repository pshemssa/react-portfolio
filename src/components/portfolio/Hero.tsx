import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '../ui/button';


export const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 bg-deep-blue text-lemon-chiffon"
    >

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
            x: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-display italic sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            A FullStack Engineer
            <br />
            {/* <motion.span 
              className="font-display italic"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              
            </motion.span> */}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            I craft beautiful, responsive web applications with clean code and 
            exceptional user experiences. Passionate about turning ideas into 
            pixel-perfect reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="text-deep-blue bg-lemon-chiffon hover:bg-primary/90 px-8 py-6 text-lg transition-colors"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-primary text-lemon-chiffon hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/pshemssa', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/shemssa-patience-112b68270/', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://x.com/shemssa_16', label: 'Twitter' },
              { icon: Instagram, href: 'https://www.instagram.com/__thy1st/', label: 'Instagram' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lemon-chiffon cursor-pointer"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// "use client";

// import { motion } from "framer-motion";
// import { ArrowDown, Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";


// export const Hero: React.FC = () => {
//   const scrollToProjects = () => {
//     document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
//   };

//   const scrollToContact = () => {
//     document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
//       style={{
//         backgroundImage: "url('/comp.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/70"></div>

//       <div className="relative z-10 text-center max-w-4xl mx-auto px-4 text-white">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Profile Image */}
//           <div className="mb-8">
//             <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 p-1 animate-pulse">
//               {/* <Image
//                 src="/shemsa.jpg"
//                 alt="Shemssa"
//                 width={128}
//                 height={128}
//                 className="w-full h-full rounded-full object-cover"
//               /> */}
//             </div>
//           </div>

//           {/* Heading */}
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">
//             Hire Shemssa
//           </h1>
//           <p className="text-3xl italic mb-6">Developer</p>

//           {/* Subtitle */}
//           <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
//             I craft beautiful, responsive web applications with clean code and exceptional
//             user experiences. Passionate about turning ideas into pixel-perfect reality.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
//             <button
//               onClick={scrollToProjects}
//               className="px-8 py-3 rounded-lg font-semibold text-black bg-emerald-400 hover:bg-emerald-500 transition-transform transform hover:scale-105"
//             >
//               View My Work
//             </button>
//             <button
//               onClick={scrollToContact}
//               className="px-8 py-3 rounded-lg font-semibold text-white border border-white hover:bg-white hover:text-black transition-transform transform hover:scale-105"
//             >
//               Get In Touch
//             </button>
//           </div>

//           {/* Social Icons */}
//           <div className="flex justify-center space-x-6">
//             <a
//               href="https://github.com/pshemssa"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-emerald-500 transition-transform transform hover:scale-125"
//             >
//               <Github size={24} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/shemssa-patience-112b68270/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-emerald-500 transition-transform transform hover:scale-125"
//             >
//               <Linkedin size={24} />
//             </a>
//             <a
//               href="https://x.com/shemssa_16"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-emerald-500 transition-transform transform hover:scale-125"
//             >
//               <Twitter size={24} />
//             </a>
//             <a
//               href="https://www.instagram.com/shemssa__"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-emerald-500 transition-transform transform hover:scale-125"
//             >
//               <Instagram size={24} />
//             </a>
//           </div>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="absolute bottom-8 left-1/2 -translate-x-1/2 text-emerald-400 cursor-pointer"
//           onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
//         >
//           <ArrowDown size={28} />
//         </motion.div>
//       </div>
//     </section>
//   );
// };
