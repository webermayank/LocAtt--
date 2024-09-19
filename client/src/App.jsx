import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AdminRegistration from "./components/AdminRegistration.jsx";
import ShowLocation from "./components/ShowLocation.jsx";
import HeroTest from "./components/HeroTest.jsx";
import Login from "./components/Login.jsx"; 
import AdminDashboard from "./components/AdminDashboard.jsx"; 
import OurServices from "./components/OurServices.jsx";
import EnterpriseTemplate from "./components/EnterpriseTemplate.jsx";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AdminRegistration />} />
        <Route path="/contact" element={< EnterpriseTemplate/>} />
        <Route path="/login" element={<Login />} /> {/* Add Login route */}
        <Route path="/dashboard" element={<AdminDashboard />} />{/* Add Dashboard route */}
        <Route path="/location" element={<ShowLocation />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <HeroTest />
  );
}

export default App;
