import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ScreensShowcase from './components/ScreensShowcase'
// import Plans from './components/Plans'
import WhatsNew from './components/WhatsNew'
import Privacy from './components/Privacy'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ScreensShowcase />
        {/* <Plans /> */}
        <WhatsNew />
        <Privacy />
      </main>
      <Footer />
    </>
  )
}
