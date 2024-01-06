import Navbar from "./components/Navbar";
import './App.css'
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div>
      <Navbar />
      <Hero />  
      <Features />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
