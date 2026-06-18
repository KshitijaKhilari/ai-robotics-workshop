import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkshopDetails from "./components/WorkshopDetails";
import LearningOutcomes from "./components/LearningOutcomes";
import Timeline from "./components/Timeline";
import FAQ from "./components/FAQ";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <WorkshopDetails />

      <LearningOutcomes />

      <Timeline />

      <FAQ />

      <RegistrationForm />
      
      <Footer />
    </>
  );
}

export default App;