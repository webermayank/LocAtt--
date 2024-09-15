import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AdminRegistration from "./components/AdminRegistration.jsx";
import ShowLocation from "./components/ShowLocation.jsx";
import HeroTest from "./components/heroTest.jsx";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AdminRegistration />} />
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
