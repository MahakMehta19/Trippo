import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Service from "./routes/service";
import Contact from "./routes/contact";
import SignUp from "./routes/SignUp";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
