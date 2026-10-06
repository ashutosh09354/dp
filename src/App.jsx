import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
// import Login from "./pages/Login"; // Re-enable when authentication is available.
import PrivacyCenter from "./pages/PrivacyCenter/PrivacyCenter";
import LegalPoliciesRoutes from "./pages/LegalPolicies/LegalPoliciesRoutes";
import ScrollToTop from "./components/layout/ScrollToTop";
import MobileBottomNav from "./components/layout/MobileBottomNav";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white pb-[calc(84px+env(safe-area-inset-bottom))] font-sans text-brand-900 md:pb-0">
      <ScrollToTop />
      <Navbar />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/privacy-center" element={<PrivacyCenter />} />
          <Route path="/legal-policies/*" element={<LegalPoliciesRoutes />} />
        </Routes>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
