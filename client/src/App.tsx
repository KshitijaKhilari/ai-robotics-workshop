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
import ParentTrust from "./components/ParentTrust";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RegistrationForm />
      <Timeline />
      <LearningOutcomes />
      <WorkshopDetails />
      <Highlights />
      <ParentTrust />
      <FAQ />
      <Certificate />
      <Footer />
    </>
  );
}

export default App;
