import { Badge } from './ui/badge';

function TechStack() {
  const getIconUrl = (tech: string) => {
    const iconMap: { [key: string]: string } = {
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      'Golang (Basics)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
      'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'Astro.js': 'https://cdn.simpleicons.org/astro/FF5D01',
      'Gorilla Mux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', // Fallback to Go icon
      'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'AWS': 'https://cdn.simpleicons.org/amazonaws/FF9900',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'Vercel': 'https://cdn.simpleicons.org/vercel/000000',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    };
    return iconMap[tech] || '';
  };

  const techCategories = [
    {
      title: 'Languages',
      techs: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Golang (Basics)']
    },
    {
      title: 'Frameworks/Libraries',
      techs: ['React.js', 'FastAPI', 'Node.js', 'Express.js', 'Astro.js', 'Gorilla Mux', 'Pandas', 'Scikit-learn']
    },
    {
      title: 'Database',
      techs: ['PostgreSQL', 'MongoDB', 'MySQL']
    },
    {
      title: 'Cloud & Tools',
      techs: ['AWS', 'Docker', 'Vercel', 'Git', 'Postman', 'Figma']
    }
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Skills</p>
            <h2 className="text-4xl font-bold text-foreground">Tech Stack</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {techCategories.map((category) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-background border border-border/50 hover:border-primary/50 text-foreground hover:bg-primary/5 px-3 py-1.5 gap-2 transition-all duration-300"
                    >
                      <img
                        src={getIconUrl(tech)}
                        alt={tech}
                        className="w-4 h-4 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
