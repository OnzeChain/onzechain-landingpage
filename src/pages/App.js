import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Faq from "../pages/faq";
import Community from "./Community";
import Whitepaper from "./Whitepaper";
import Team from "./Team";
import TermsOfService from "../pages/terms-of-service";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/community" element={<Community />} />
        <Route path="/whitepaper" element={<Whitepaper />}/>
        <Route path="/team" element={<Team />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
