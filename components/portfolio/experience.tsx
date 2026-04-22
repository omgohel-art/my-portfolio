"use client";

const experiences = [
  {
    year: "Present",
    role: "Aspiring Junior Developer",
    company: "Open to Opportunities",
    description:
      "Actively seeking internships and entry-level positions to apply my skills in real-world projects. Eager to contribute to innovative teams while continuing to grow as a developer.",
    isCurrent: true,
  },
  {
    year: "Present",
    role: "Self-Directed Learning",
    company: "Personal Projects",
    description:
      "Building full-stack applications using modern technologies including Next.js, React, and TypeScript. Developing practical skills through hands-on project work.",
    isCurrent: false,
  },
  {
    year: "Present",
    role: "Diploma Student",
    company: "Government Polytechnic, Ahmedabad",
    description:
      "Pursuing diploma in Computer Engineering with focus on software development, data structures, and programming fundamentals. Building a strong technical foundation while working on practical projects.",
    isCurrent: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-card/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-primary text-sm uppercase tracking-widest font-medium mb-3">
            Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Experience & Education
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className="relative grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-1.5 ${
                    exp.isCurrent
                      ? "bg-primary shadow-lg shadow-primary/50"
                      : "bg-muted-foreground/30"
                  }`}
                />

                {/* Year - Left side on desktop */}
                <div
                  className={`md:text-right pl-8 md:pl-0 md:pr-12 ${
                    index % 2 === 0 ? "" : "md:order-2 md:text-left md:pl-12 md:pr-0"
                  }`}
                >
                  <span className="text-sm text-muted-foreground font-medium">
                    {exp.year}
                  </span>
                </div>

                {/* Content - Right side on desktop */}
                <div
                  className={`pl-8 md:pl-12 ${
                    index % 2 === 0 ? "" : "md:order-1 md:pl-0 md:pr-12 md:text-right"
                  }`}
                >
                  <div
                    className={`p-6 rounded-xl transition-all duration-300 hover:shadow-lg ${
                      exp.isCurrent
                        ? "bg-card border border-primary/20 shadow-lg shadow-primary/5"
                        : "bg-card/50 border border-border/50 hover:border-border"
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
