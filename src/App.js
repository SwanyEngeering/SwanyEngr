import Fotter from "./Component/Fotter";
import Home from "./Pages/Homepage";
import About from "./Pages/Aboutpage";
import Service from "./Pages/Servicepage";
import Project from "./Pages/Projectpage";
import Contact from "./Pages/Contactpage";
import Navbar from "./Component/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route element={<About />} path="/about" />
          <Route element={<Service />} path="/service" />
          <Route element={<Project />} path="/project" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </BrowserRouter>
      <Fotter />
    </div>
  );
}

export default App;
