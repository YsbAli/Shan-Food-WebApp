import Card from "./Components/Card";
import CategoriItems from "./Components/CategoriItems";
import DetailsFood from "./Components/DetailsFood";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <Card title="Sun's Out BOGO'S Out" text="Through B/26" />
        <DetailsFood />
        <CategoriItems />
        <Footer/>
      </div>
    </>
  );
};

export default App;
