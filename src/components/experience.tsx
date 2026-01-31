function Experience() {
  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'Excellence Technology',
      period: 'June 2024 - July 2024 | Remote',
      description: 'Architected a scientific calculator in Java, incorporating advanced mathematical functions including trigonometry, logarithms, and exponentiation, achieving a 20% improvement in calculation efficiency. Engineered performance optimizations for complex computational operations, delivering fast and reliable calculations with a 30% reduction in processing time.',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Professional Journey</p>
            <h2 className="text-4xl font-bold text-foreground">Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l border-border hover:border-primary/50 transition-colors duration-300 pb-12 last:pb-0 group">
                <div className="absolute w-3 h-3 bg-background border-2 border-primary rounded-full -left-[6.5px] top-1.5 group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-[0_0_0_4px_rgba(var(--primary),0.1)]"></div>

                <div className="space-y-3 group-hover:translate-x-1 transition-transform duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded bg-muted text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-primary font-medium">{exp.company}</span>
                  </div>

                  <p className="text-foreground/70 leading-relaxed text-sm pt-1">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
