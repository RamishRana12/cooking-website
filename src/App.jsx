import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navigation/Navigation";
import Home from "./pages/Home";
import Hero from "./assets/herosection/Hero";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;
