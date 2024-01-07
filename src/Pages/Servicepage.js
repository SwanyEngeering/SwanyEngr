import Header from "../Component/Homepage/Header";
import Believe from "../Component/Servicepage/Believe";
import Stand from "../Component/Servicepage/Stand";
import Team from "../Component/Aboutpage/Team2";
import Worth from "../Component/Servicepage/Worth";

export default function Servicepage() {
  return (
    <div>
      <Header bg={"service"} />
      <Believe />
      <Stand />
      <Team />
      <Worth />
    </div>
  );
}
