import Header from "../Component/Homepage/Header";
import "../App.css";
import Connect from "../Component/Homepage/Connect";
import Insight from "../Component/Homepage/Insight";
import Footer from "../Component/Homepage/Footer";
import Projects from "../Component/Homepage/Projects";
import About from "../Component/Homepage/About";
import Choose from "../Component/Homepage/Choose";
import Experties from "../Component/Homepage/Experties";
import Slider from "../Component/Homepage/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <About />
      <Experties />
      <Choose />
      <Projects />
      <Connect />
      <Insight />
      <Footer />
    </>
  );
}
