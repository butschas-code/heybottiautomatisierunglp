import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Pain from './components/Pain'
import Package from './components/Package'
import Services from './components/Services'
import Industries from './components/Industries'
import Results from './components/Results'
import Process from './components/Process'
import Upsell from './components/Upsell'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-botti-bg">
      <Nav />
      <Hero />
      <TrustBar />
      <Pain />
      <Package />
      <Services />
      <Industries />
      <Results />
      <Process />
      <Upsell />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  )
}
