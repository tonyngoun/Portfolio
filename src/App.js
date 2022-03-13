
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

import Header from "./components/Header";

// import Particles from "react-tsparticles";

import AboutMe from "./components/AboutMe"

import Experience from "./components/Experience";

import Portfolio from "./components/Portfolio";

// import Contacts from "./components/Contacts";

// import Footer from "./components/Footer";


function App() {
  return (
    <>
    {/* <Particles
      params= {{
        particles: {
          number: {
            value: 30,
              density: {
                enable:true,
                value_area: 900
          }
        }
      }
    }}
    /> */}

    {/* <Particles/> */}
    <Navbar />
    <Header/>
    <AboutMe/>
    <Experience />
    <Portfolio/>
    {/* <Contacts/> */}
    {/* <Footer/> */}

    </>
  );
}

export default App;
