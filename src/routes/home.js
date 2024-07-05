import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Nav";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?w=900&t=st=1702400631~exp=1702401231~hmac=a5630119cd44fa647ae2db7845f1fd6ccd8f989f06f366821bd5000dc7c671f5"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
