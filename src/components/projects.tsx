import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

function Projects() {
  const projects = [
    {
      title: 'ApplyMate - AI-Powered Job Application Assistant',
      description: 'Designed and developed a responsive frontend using React.js to streamline job application workflows and user interactions. Implemented dynamic UI components for resume analysis, job matching, and AI-generated application suggestions. Integrated REST APIs to fetch and render real-time data.',
      tags: ['React.js', 'FastAPI', 'Groq API', 'JavaScript'],
      link: 'https://github.com/vishxesh10',
      demo: 'https://applymate-frontend1.onrender.com/',
      image: '/applymate.png'
    },
    {
      title: 'TicketEase - AI-Powered Ticket Booking Chatbot',
      description: 'Architected an intelligent ticket booking chatbot leveraging Next.js frontend, FastAPI backend, and Groq API for advanced natural language processing capabilities. Engineered real-time reservation system with AI-driven FAQ automation and dynamic pricing validation.',
      tags: ['Next.js', 'FastAPI', 'Groq API', 'JavaScript'],
      link: 'https://github.com/vishxesh10',
      demo: 'https://ticket-ease-iota.vercel.app/',
      image: '/ticketease.png'
    },
    {
      title: 'InsureMate',
      description: 'Developed sophisticated Health Insurance Premium Predictor utilizing FastAPI, enabling users to generate accurate cost estimations through parametric analysis. Containerized the solution using Docker for optimized deployment workflows and horizontal scalability.',
      tags: ['Streamlit', 'FastAPI', 'Docker', 'AWS'],
      link: 'https://github.com/vishxesh10',
      demo: 'https://insuremate-live-frontend.onrender.com/',
      image: '/insuremate.png'
    },
    {
      title: 'Online Examination System',
      description: 'Built a comprehensive online examination platform featuring secure user authentication, timed tests, and automatic grading. Implemented an intuitive dashboard for students and administrators to manage exams and view performance analytics.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      link: 'https://github.com/vishxesh10',
      demo: 'https://examhubvercelapp.vercel.app/',
      image: '/online-exam.png'
    },
    {
      title: 'Weather App',
      description: 'Developed a real-time weather application that provides accurate weather forecasts, humidity levels, and wind speed for any global location. Integrated OpenWeatherMap API for dynamic data fetching and displayed it through a clean, responsive user interface.',
      tags: ['React.js', 'OpenWeatherMap API', 'CSS3'],
      link: 'https://github.com/vishxesh10',
      demo: 'https://weather-application-gules-xi.vercel.app/',
      image: '/weather-app.png'
    },
    {
      title: 'Todo Application',
      description: 'Created a robust task management application with features for adding, editing, deleting, and filtering tasks. Utilized local storage for data persistence, ensuring a seamless user experience across sessions.',
      tags: ['React.js', 'localForage', 'Tailwind CSS'],
      link: 'https://github.com/vishxesh10',
      demo: 'https://to-do-list-application-rho.vercel.app/',
      image: '/todo-app.png'
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Featured Work</p>
            <h2 className="text-4xl font-bold text-foreground">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 h-full"
              >
                <div className="relative h-48 w-full overflow-hidden border-b border-border/50">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-1" title={project.title}>
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md bg-primary/5 text-primary border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2 mt-4 border-t border-border/50">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent hover:bg-primary/5">
                        <Github size={16} />
                        Code
                      </Button>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg shadow-primary/20">
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                    </a>
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

export default Projects;
