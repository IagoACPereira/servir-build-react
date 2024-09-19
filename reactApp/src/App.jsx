import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
