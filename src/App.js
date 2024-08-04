import { Helmet } from "react-helmet";
import "./App.css";
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Network from "./Pages/Network";
import Team from "./Pages/Team";

function App() {
  return (
    <>
      <Helmet>
        <title>Innocom</title>
      </Helmet>
      <Home />
      <About />
      <Network />
      <Gallery />
      <Team />
      <Footer />
    </>
  );
}

export default App;
