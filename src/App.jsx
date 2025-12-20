import Hero from "./pages/Hero";
import AboutSalon from "./pages/AboutSasuke";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import ReviewsList from "./components/Review";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <AboutSalon />
      <Services />
      <Gallery />
      <ReviewsList />
      <Login/>
      <Contact />
    </div>
  );
}
