import './App.css';
// components
import Home from './Components/Home/Home';

// primeng
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; //icons 
import PrimeReact from 'primereact/api';
import Navbar from './Components/Navbar/Navbar';

function App() {
  PrimeReact.ripple = true;
  PrimeReact.inputStyle = 'filled';
  return (
    <div className="App">
      <div><Navbar></Navbar></div>
    </div>
  );
}

export default App;
