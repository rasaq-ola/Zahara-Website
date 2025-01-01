import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import WelcomePage from './Pages/WelcomePage';
import AboutUs from './Pages/AboutUs';
import NoJobs from './Pages/NoJobs';
import Footer from './Components/Footer/Footer';

function App() {
  // Custom wrapper component to access location
  const Layout = ({ children }) => {
    const location = useLocation();
    const excludeFooterRoutes = ['/Pages/NoJobs'];

    return (
      <div className="App">
        <Navbar />
        {children}
        {!excludeFooterRoutes.includes(location.pathname) && <Footer />}
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/AboutUs" target="_blank" element={<AboutUs category="AboutUs" />} />
          <Route path="/Pages/NoJobs" element={<NoJobs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;