import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./components/sections/Contact";
import AboutPage from "./components/sections/AboutPage";
import FeatureDetail from "./components/sections/FeatureDetail";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/Register";
import ToastErrors from "./Utilities/ToastErrors";

function App() {
  return (
    <Router>
      {/* Showing Toast-Error on every path */}
      <ToastErrors />
      {/* Routes of every page */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeatureDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Routes of Authentication */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<SignUpPage />} />
      </Routes>
    </Router >
  );
}

export default App;