import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
function NotFound() {
  return (
    <main className="page container not-found">
      <span className="eyebrow">
        <i /> 404 — PAGE NOT FOUND
      </span>
      <h1>
        Looks like a<br />
        <span className="gradient-text">wrong turn.</span>
      </h1>
      <a href="/" className="button button-primary">
        Back to home
      </a>
    </main>
  );
}
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
