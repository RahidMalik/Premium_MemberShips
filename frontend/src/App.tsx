import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/sections/Contact";
import FeatureDetail from "./components/sections/FeatureDetail";
import AboutPage from "./components/sections/AboutPage";
import LandingPage from "./pages/LandingPage";
// import Dashboard from "./pages/Dashboard";
import SignUpPage from "./pages/Register";
import LoginPage from "./pages/Login";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      {/* Showing Toast-Error on every path */}
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'font-medium text-sm px-4 py-2 shadow-2xl',
          success: {
            duration: 4000,
            style: {
              border: '2px solid #10B981',
              padding: '16px',
              color: '#065F46',
              background: '#ECFDF5',
            },
          },

          error: {
            duration: 5000,
            style: {
              border: '2px solid #EF4444',
              padding: '16px',
              color: '#991B1B',
              background: '#FEF2F2',
            },
          },
        }}
      />
      <Routes>
        {/* Routes of every page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeatureDetail />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;