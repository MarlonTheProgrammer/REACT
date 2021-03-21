import React,{useState, useEffect} from "react";
import './App.css';
import Portada from "./componentes/portada/Portada";
import Navbar from "./componentes/portada/navbar/Navbar";
import About from "./componentes/portada/about/About";
import Slider from "./componentes/portada/slider/Slider";
import Info from "./componentes/portada/info/Info";
import Footer from "./componentes/portada/footer/Footer";

function App() {
  const[scrollHeight,setScrollHeight] = useState(0);

  const handleScroll = () => {

    const position = window.pageYOffset;
    setScrollHeight(position);

  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
    <Navbar isScrolling = {scrollHeight} />
    <Portada />
    <About />
    <Slider />
    <Info />
    <Footer />
    </div>
  );
}

export default App;
