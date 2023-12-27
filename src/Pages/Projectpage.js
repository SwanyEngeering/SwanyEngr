import Header from "../Component/Homepage/Header";
import Collab from "../Component/Projectspage/Collab";
import Goal from "../Component/Projectspage/Goal";
import Projects from "../Component/Projectspage/Past Projects";

export default function Projectpage() {
  return (
    <div
      style={{
        marginBottom: "2rem",
      }}
    >
      <Header bg={"project"} />
      <Projects />
      <Collab />
      <Goal />
    </div>
  );
}
