import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import TechStack from './components/tech-stack'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

import { ThemeProvider } from './components/theme-provider'
import './index.css'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App
