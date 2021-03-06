import Header from './components/header/header'

import './App.css'
import LandingSection from './components/landingSection/landingSection'
import WalkthroughSection from './components/walkthroughSection/walkthroughSection'
import TechProductsSection from './components/techProductsSection/techProductsSection'

function App () {
  return (
    <div className="App">
      <Header />
      <div className="forPattern container">
        <LandingSection />
        <WalkthroughSection />
      </div>
      <TechProductsSection/>
    </div>
  )
}

export default App
