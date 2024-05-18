import Details from "./components/Details";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Home />
      <Services />
      <Details />
      <FAQ />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
