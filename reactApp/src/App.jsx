import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Home from "./components/Home"
import ConsultaCep from "./components/ConsultaCep"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consulta-cep" element={<ConsultaCep />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
