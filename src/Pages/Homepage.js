import Header from "../Component/Homepage/Header";
import About from "../Component/Homepage/About";
import Service from "../Component/Homepage/Services";
import Goal from "../Component/Homepage/Goal";
import Meeting from "../Component/Homepage/Meeting";
import Contact from "../Component/Homepage/Contact";
import "../App.css";

export default function Home() {
  return (
    <>
      <Header bg={"home"} />
      <About />
      <Service />
      <Goal />
      <Meeting />
      <Contact />
    </>
  );
}
