import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Faq from "../pages/faq";
import Community from "./Community"
import TermsOfService from "../pages/terms-of-service";
import Navbar from "../components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/community" element={<Community />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
