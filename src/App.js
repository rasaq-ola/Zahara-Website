import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './Components/Welcome/Welcome'
import Services from './Components/Services/Services';
import Assistant from './Components/Assistant/Assistant';
import Info from './Components/Info/Info';
import AboutUs from './Pages/AboutUs';
import WelcomePage from './Pages/WelcomePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/AboutUs' element={<AboutUs category="AboutUs" />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
