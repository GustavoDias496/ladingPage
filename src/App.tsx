import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Materials from './components/Materials/Materials'
import Services from './components/Services/Services'
import Welcome from './components/Welcome/Welcome'

function App() {

  return (
    <>
      <Header/>
      <Welcome/>
      <About/>
      <Services/>
      <Materials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
