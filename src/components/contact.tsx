
import { Mail, Linkedin, Github, Twitter, Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('vishesh23022005@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      label: 'Email',
      value: 'vishesh23022005@gmail.com',
      href: 'mailto:vishesh23022005@gmail.com',
      icon: Mail,
    },
    {
      label: 'GitHub',
      value: 'github.com/vishxesh10',
      href: 'https://github.com/vishxesh10',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/vishesh10',
      href: 'https://linkedin.com/in/vishesh10',
      icon: Linkedin,
    },
    // {
    //   label: 'Twitter',
    //   value: '@yourhandle',
    //   href: 'https://twitter.com',
    //   icon: Twitter,
    // },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
            <h2 className="text-4xl font-bold text-foreground">Contact</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
              </p>
              <p className="text-foreground/70 text-sm">
                I'll do my best to get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-card transition-all duration-200 group"
                  >
                    <Icon className="text-primary group-hover:scale-110 transition-transform" size={20} />
                    <div className="flex-1">
                      <p className="text-xs text-foreground/60 uppercase tracking-widest">{contact.label}</p>
                      <p className="text-foreground group-hover:text-primary transition-colors">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
            <a href="mailto:vishesh23022005@gmail.com" className="flex-1">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send an Email
              </Button>
            </a>
            <button onClick={copyEmail} className="flex-1">
              <Button variant="outline" className="w-full gap-2 bg-transparent">
                {copied ? (
                  <>
                    <Check size={18} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy Email
                  </>
                )}
              </Button>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
