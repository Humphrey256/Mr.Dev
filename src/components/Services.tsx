import { motion } from "framer-motion";
import { Globe, Smartphone, Server, Palette, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first designs that look stunning on every device and screen size.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Scalable APIs and server architecture with Node.js and databases.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive interfaces designed for the best user experience.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed audits and optimizations for lightning-fast loading times.",
  },
  {
    icon: Shield,
    title: "Security & DevOps",
    description: "Secure deployments with CI/CD pipelines and cloud infrastructure.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            What I <span className="text-gradient">offer</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl p-8 hover-lift group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-5 group-hover:glow-sm transition-shadow">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
