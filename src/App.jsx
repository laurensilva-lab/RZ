import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Hours from "./components/Hours/Hours";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import RazorDivider from "./components/RazorDivider/RazorDivider";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RazorDivider />
        <Services />
        <RazorDivider />
        <Hours />
        <Contact />
        <RazorDivider />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
