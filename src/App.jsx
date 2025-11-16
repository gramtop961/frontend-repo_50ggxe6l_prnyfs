import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0F] text-[#F1EFEA]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <GlobalStyles />
    </div>
  )
}

function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/0">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="font-extrabold tracking-wider text-[#F1EFEA]">
          AJ
        </button>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[#F1EFEA]/80">
          {[
            { id: 'about', label: 'About' },
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Skills' },
            { id: 'achievements', label: 'Achievements' },
            { id: 'contact', label: 'Contact' },
          ].map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="hover:text-[#1DBB61] transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

function GlobalStyles() {
  return (
    <style>
      {`
      @keyframes float { 0% { transform: translateY(0) } 50% { transform: translateY(-8px) } 100% { transform: translateY(0) } }
      .animate-float { animation: float 8s ease-in-out infinite; }
      .shimmer-text { 
        background: linear-gradient(90deg, #F1EFEA, #D8A537, #F1EFEA);
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: shimmer 8s linear infinite;
      }
      @keyframes shimmer { to { background-position: 200% center } }
      `}
    </style>
  )
}

export default App
