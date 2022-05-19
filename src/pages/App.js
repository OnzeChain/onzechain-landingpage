import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Faq from "../pages/faq";
import Navbar from "../components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
