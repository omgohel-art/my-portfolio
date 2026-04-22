"use client";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux"],
  },
  {
    category: "Design",
    skills: ["Figma", "UI/UX", "Responsive Design", "Accessibility"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-primary text-sm uppercase tracking-widest font-medium mb-3">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, catIndex) => (
            <div
              key={cat.category}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border/50">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
