import Header from "../Component/Homepage/Header";
import "../App.css";
import Connect from "../Component/Homepage/Connect";
import Insight from "../Component/Homepage/Insight";
import Footer from "../Component/Homepage/Footer";

export default function Home() {
  return (
    <>
      <Header bg={"home"} />
      <Connect />
      <Insight />
      <Footer />
    </>
  );
}
