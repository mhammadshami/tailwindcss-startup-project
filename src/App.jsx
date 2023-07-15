import Features from "./components/Features";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import StayProductive from "./components/StayProductive";
import Testimonials from "./components/Testimonials";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Features />
      <Footer />
      <StayProductive />
      <Testimonials />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
