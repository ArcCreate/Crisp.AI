import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScanProduce from "./pages/ScanPage";
import MyProduce from "./pages/MyProduce";
import Home from "./pages/HomePage";
import {Navigate} from "react-router-dom";
import './index.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/FreshForecast" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<ScanProduce />} />
          <Route path="/my-produce" element={<MyProduce />} />
          <Route path="*" element={<Navigate to="/" />} />{" "}
          {/* Redirect all other routes to home */}
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
