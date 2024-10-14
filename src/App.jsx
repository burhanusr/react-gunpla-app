import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Accessories, Builds, Home, Kits } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kits" element={<Kits />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/builds" element={<Builds />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
