import { motion } from "framer-motion";
import { Code2, Coffee, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">
            About Me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Turning ideas into{" "}
            <span className="text-gradient">reality</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a passionate Full-Stack Developer with 4+ years of experience
              building scalable web applications. I specialize in the MERN stack
              and love creating solutions that make a real impact.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Projects", value: "10" },
                { label: "Experience", value: "4+ yrs" },
                { label: "Clients", value: "30+" },
                { label: "Commits", value: "2K+" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4">
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: Code2,
                title: "Clean Code",
                desc: "Writing maintainable, well-documented code that scales.",
              },
              {
                icon: Rocket,
                title: "Performance",
                desc: "Optimizing for speed and delivering lightning-fast experiences.",
              },
              {
                icon: Coffee,
                title: "Always Learning",
                desc: "Staying current with the latest tech trends and best practices.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="glass rounded-xl p-6 hover-lift group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:glow-sm transition-shadow">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
