import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "MongoDB", level: 85 },
  { name: "Express.js", level: 87 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Next.js", level: 80 },
  { name: "PostgreSQL", level: 78 },
];

const tools = [
  "Git", "Docker", "AWS", "Firebase", "Figma", "VS Code", "Redis", "GraphQL",
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">
            Skills
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            My <span className="text-gradient">tech stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className="space-y-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-sm text-muted-foreground font-mono">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(200,80%,55%)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-lg glass text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
