import "./App.css";
import About from "./components/About";
import Aparts from "./components/Aparts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { WhatsappIcon, WhatsappShareButton } from "react-share";

const importAllC1 = (r) => r.keys().map(r);
const imagesC1 = importAllC1(
  require.context("./Assets/images/cuarto1/", false, /\.(jpeg)$/)
);

const importAllC2 = (r) => r.keys().map(r);
const imagesC2 = importAllC2(
  require.context("./Assets/images/cuarto2/", false, /\.(jpeg)$/)
);

const importAllC3 = (r) => r.keys().map(r);
const imagesC3 = importAllC3(
  require.context("./Assets/images/cuarto3/", false, /\.(jpeg)$/)
);

const importAllC4 = (r) => r.keys().map(r);
const imagesC4 = importAllC4(
  require.context("./Assets/images/cuarto4/", false, /\.(jpeg)$/)
);

function App() {
  const apartamentos = [
    {
      id: 1,
      title: "Apart 1",
      description: ["1 dormitorio", "3 huéspedes", "1 baño"],
      images: [imagesC1],
    },
    {
      id: 2,
      title: "Apart 2",
      description: ["2 Camas", "Para 4 personas", "Wifi incluido"],
      images: [imagesC2],
    },
    {
      id: 3,
      title: "Apart 3",
      description: ["4 huéspedes", "1 dormitorio", "2 camas", "1 baño"],
      images: [imagesC3],
    },
    {
      id: 1,
      title: "Apart 1",
      description: ["2 Camas", "Para 4 personas", "Wifi incluido"],
      images: [imagesC4],
    },
  ];

  return (
    <div className="App">
      <Home />
      <About />
      <Aparts apartmentsData={apartamentos} />
      {/* <Contact /> */}
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
