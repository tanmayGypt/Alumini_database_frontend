import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Comman_Components/NavBar";
import Homepage from "./Page/Homepage";
import Footer from "./Components/Comman_Components/Footer";
import Alumini_Achivements_Page from "./Page/Alumini-Achivements";
import Alumini_Directory from "./Page/Alumini-Directory";
import Contact from "./Page/Contact";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/Alumini-Achivements"
            element={<Alumini_Achivements_Page />}
          />
          <Route element={<Alumini_Directory />} path="/Alumini_Directory" />
          <Route element={<Contact />} path="/Contact" />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
