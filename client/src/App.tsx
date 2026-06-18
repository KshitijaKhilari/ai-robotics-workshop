import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkshopDetails from "./components/WorkshopDetails";
import LearningOutcomes from "./components/LearningOutcomes";
import Timeline from "./components/Timeline";
import FAQ from "./components/FAQ";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Certificate from "./components/Certificate";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Highlights />

      <WorkshopDetails />

      <LearningOutcomes />

      <Certificate />

      <Timeline />

      <FAQ />

      <RegistrationForm />

      <Footer />
    </>
  );
}

export default App;