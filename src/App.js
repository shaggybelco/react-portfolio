import './App.css';
// components
import Home from './Components/Home/Home';

// primeng
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; //icons 
import PrimeReact from 'primereact/api';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import { Route, Routes } from 'react-router';

function App() {
  PrimeReact.ripple = true;
  PrimeReact.inputStyle = 'filled';
  return (
    <>
    <Navbar />
      
    </>
  );
}

export default App;
