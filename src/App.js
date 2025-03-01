import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import WelcomePage from './Pages/WelcomePage';
import AboutUs from './Pages/AboutUs';
import NoJobs from './Pages/NoJobs';
import Footer from './Components/Footer/Footer';
import WaitList from './Pages/WaitList';

function Layout({ children }) {
  const location = useLocation();
  const excludeNavbarFooterRoutes = ['/Pages/WaitList']; // List of pages without Navbar and Footer
  const excludeFooterRoutes = ['/Pages/NoJobs']; // Pages that only exclude Footer

  return (
    <div className="App">
      {!excludeNavbarFooterRoutes.includes(location.pathname) && <Navbar />}
      {children}
      {!excludeNavbarFooterRoutes.includes(location.pathname) &&
        !excludeFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/AboutUs" target="_blank" element={<AboutUs category="AboutUs" />} />
          <Route path="/Pages/NoJobs" element={<NoJobs />} />
          <Route path="/Pages/Waitlist" element={<WaitList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
