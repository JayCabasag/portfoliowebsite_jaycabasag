import { useState, useRef } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Works from "./components/Works";
import { scroller } from "react-scroll";

function App() {

  const [selectedSection, setSelectedSection] = useState('Home')

  const moveToHome = () => {
    setSelectedSection('Home'); 
                   
    scroller.scrollTo("home-container", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      });                                   
  }

  const moveToWorks = () => {
    setSelectedSection('Works'); 
                   
    scroller.scrollTo("works-container", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      });                                   
  }

  const moveToAbout = () => {
    setSelectedSection('About'); 
                   
    scroller.scrollTo("about-container", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      });                                   
  }

  return (
    <div className="App">
        <div className="main-container">
          
            <nav className='home-navbar'>
                <p></p>

                <ul>
                    <li className={selectedSection === 'Home'? 'active' : null} onClick={() => {moveToHome()}}>Home</li>
                    <li className={selectedSection === 'Works'? 'active' : null} onClick={() => {moveToWorks()}}>Works</li>
                    <li className={selectedSection === 'About'? 'active' : null} onClick={() => {moveToAbout()}}>About</li>
                </ul>
            </nav>

            <Home />
            <Works />
            <About />
        </div>
    </div>
  );
}

export default App;
