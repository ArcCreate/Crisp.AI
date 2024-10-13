import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScanProduce from "./pages/ScanPage";
import MyProduce from "./pages/MyProduce";
import Home from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<ScanProduce />} />
          <Route path="/my-produce" element={<MyProduce />} />
        </Routes>
        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
