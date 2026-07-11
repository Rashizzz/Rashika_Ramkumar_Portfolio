import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-bg text-gray-100 selection:bg-primary/40">
      {/* Ambient background grid glow, sits behind all sections */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-glow" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
