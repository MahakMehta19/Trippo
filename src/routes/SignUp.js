import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SignUpForm from "../components/SignUPForm";

function SignUp() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://img.freepik.com/premium-photo/green-jungle-with-sunbeams-butterflies_124715-2949.jpg?w=900"
        title="Contact Us"
        btnClass="hide"
      />
      <SignUPForm />
      <Footer />
    </>
  );
}

export default SignUp;
