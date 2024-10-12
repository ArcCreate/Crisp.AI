import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecipeSection from "./components/RecipeSection";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Navbar/>      
      <Hero />
      <RecipeSection />
      <Footer/>
    </div>
  );
}

export default App;
