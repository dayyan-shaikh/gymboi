import Navbar from "./components/Navbar";
import './App.css'
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <div>
      <Navbar />
      <Hero />  
      <Features />
      <Contact />
    </div>
    </>
  );
}

export default App;
