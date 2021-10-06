import Header from "./components/Header"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import GlobalStyle from "../old/GlobalStyle"
import SectionOne from "./components/SectionOne"
import SectionTwo from "./components/SectionTwo"
import SectionThree from "./components/SectionThree"
import SectionFour from "./components/SectionFour"
import SectionFive from "./components/SectionFive"
import SectionSix from "./components/SectionSix"
import Footer from "../old/Footer"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </div>
  )
}

export default App
