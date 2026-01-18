import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/sections/Contact";
import FeatureDetail from "./components/sections/FeatureDetail";
import AboutPage from "./components/sections/AboutPage";
import LandingPage from "./pages/LandingPage";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Jab banda website par aayega to ye dikhega */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeatureDetail />} />

        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        {/* Aap mazeed raste yahan add kar sakte hain */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;