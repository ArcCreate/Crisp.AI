import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecipeSection from "./components/RecipeSection";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

function App() {

  return (
    <div className="App">
      <Navbar/>      
      <Hero />
      <RecipeSection />
      <Footer/>
      <BottomNav/>
    </div>
  );
}

export default App;
