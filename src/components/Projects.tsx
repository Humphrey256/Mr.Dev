import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Emergency Health Centre Locator",
    description:
      "A locator system for nearby hospitals and emergency health centers so people in urgent need can quickly access care.",
    tech: ["React", "Node.js", "MongoDB", "Maps API"],
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Doctor Appointment Booking App",
    description:
      "A platform that allows patients to book appointments with doctors, manage schedules, and receive confirmations.",
    tech: ["React", "Express", "MongoDB", "JWT"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Sales Management System",
    description:
      "A business solution for tracking products, recording sales, monitoring performance, and generating reports.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Digital Census System",
    description:
      "A digital census platform for collecting, organizing, and analyzing household and community population data.",
    tech: ["React", "Express", "MongoDB", "REST API"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Homely Furniture Sales Platform",
    description:
      "An online furniture selling platform that helps customers browse products, place orders, and manage purchases.",
    tech: ["React", "Node.js", "MongoDB", "Payments"],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Athletiq Registration System",
    description:
      "A sports registration app for athletes and participants to enroll in events and manage participation details.",
    tech: ["React", "Express", "MongoDB", "Cloudinary"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Career Guide App",
    description:
      "A career guidance app that helps students in secondary school and institutes research paths related to their subject combinations.",
    tech: ["React", "Node.js", "MongoDB", "REST API"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "YO Sacco App",
    description:
      "A sacco savings application that enables users to save money through mobile money services.",
    tech: ["React", "Node.js", "MongoDB", "Mobile Money API"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">
            Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Featured <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover-lift group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-3 rounded-full bg-card text-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    className="p-3 rounded-full bg-card text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
