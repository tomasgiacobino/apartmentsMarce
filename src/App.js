import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";
import { WhatsappIcon, WhatsappShareButton } from "react-share";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsappShareButton
        url={window.location.href}
        style={{
          position: "fixed",
          bottom: "1rem",
          right: "2rem",
        }}
      >
        <WhatsappIcon size={62} round />
      </WhatsappShareButton>
    </div>
  );
}

export default App;
