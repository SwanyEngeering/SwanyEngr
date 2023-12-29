import Header from "../Component/Aboutpage/header";
import CEO from "../Component/Aboutpage/ceo";
import MD from "../Component/Aboutpage/md";
import Experties from "../Component/Aboutpage/Experties";
import Values from "../Component/Aboutpage/values";
import Team from "../Component/Aboutpage/Team";
import Vision from "../Component/Aboutpage/Vision";
import About from "../Component/Aboutpage/About";
import Profile from "../Component/Aboutpage/Profile";

export default function Aboutpage() {
  return (
    <div>
      <Header bg={"about"} head={"about"} />
      <Profile />
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
