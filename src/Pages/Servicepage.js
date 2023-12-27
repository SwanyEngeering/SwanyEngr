import Header from "../Component/Homepage/Header";
import Experties from "../Component/Servicepage//Experties";
import About from "../Component/Servicepage/About";
import Goal from "../Component/Projectspage/Goal";

export default function Servicepage() {
  return (
    <div>
      <Header bg={"service"} />
      <Experties />
      <About />
      <Goal />
    </div>
  );
}
