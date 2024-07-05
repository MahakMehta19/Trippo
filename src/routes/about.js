import Hero from "../components/Hero";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://img.freepik.com/premium-photo/chiang-mai-lantern-festival-flashlights-air-cantoya-balloons_692702-1892.jpg?w=996"
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
