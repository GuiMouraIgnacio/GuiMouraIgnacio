import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Games from './components/Games'
import Art from './components/Art'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-bg text-text-primary min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Games />
        <Art />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
