import Header from "../Component/Homepage/Header";
import CEO from "../Component/Aboutpage/ceo";
import MD from "../Component/Aboutpage/md";
import Experties from "../Component/Aboutpage/Experties";
import Values from "../Component/Aboutpage/values";
import Team from "../Component/Aboutpage/Team";
import Vision from "../Component/Aboutpage/Vision";
import About from "../Component/Aboutpage/About";

export default function Aboutpage() {
  return (
    <div>
      <Header bg={"about"} />
      <CEO />
      <MD />
      <Team />
      <Experties />
      <Values />
      <About />
      <Vision />
    </div>
  );
}
