function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">About</p>
            <h2 className="text-4xl font-bold text-foreground">Who I Am</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I am a motivated frontend developer with a strong foundation in React, modern CSS frameworks, and interactive UI design. I am eager to apply practical skills in real-world projects, collaborate with dynamic teams, and continue learning in a fast-paced development environment.
              </p>
              <p>
                My passion for software development drives me to build scalable web applications and explore new technologies. I strongly believe in writing clean, maintainable code and optimizing user experiences.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/hero-bg.jpg"
                  alt="Vishesh"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border/50">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-xl">Education</h3>
                <ul className="space-y-6 text-foreground/80">
                  <li className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
                    <h4 className="font-bold text-foreground">Chandigarh Engineering College, Mohali</h4>
                    <p className="text-sm font-medium text-primary">B.Tech in Computer Science and Engineering</p>
                    <p className="text-xs text-foreground/60 mt-1">Aug 2022 - May 2026 | CGPA: 7.8</p>
                  </li>
                  <li className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
                    <h4 className="font-bold text-foreground">Eicher School, Parwanoo</h4>
                    <p className="text-sm font-medium text-primary">Senior Secondary (Class XII)</p>
                    <p className="text-xs text-foreground/60 mt-1">2022 | GPA: 8.2</p>
                  </li>
                  <li className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
                    <h4 className="font-bold text-foreground">Eicher School, Parwanoo</h4>
                    <p className="text-sm font-medium text-primary">Secondary (Class X)</p>
                    <p className="text-xs text-foreground/60 mt-1">2020 | GPA: 7.2</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-xl">Achievements</h3>
                <div className="space-y-4">
                  <div className="bg-card p-4 rounded-lg border border-border shadow-sm hover:border-primary/50 transition-colors">
                    <p className="text-sm text-foreground/80 font-medium">Secured a position among the Top 15 teams in 3 national-level hackathons.</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border shadow-sm hover:border-primary/50 transition-colors">
                    <p className="text-sm text-foreground/80 font-medium">Certified by IBM, NASSCOM FutureSkills, and Great Learning in industry-relevant programs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
