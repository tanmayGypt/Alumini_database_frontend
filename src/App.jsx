import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/Comman_Components/NavBar";
import Homepage from "./Page/Homepage";
import Footer from "./Components/Comman_Components/Footer";
import Alumini_Achivements_Page from "./Page/Alumini-Achivements";
import Alumini_Directory from "./Page/Alumini-Directory";
import Contact from "./Page/Contact";
import Netwoking_Opportunities from "./Page/Netwoking_Opportunities";
import LoadingBar from "react-top-loading-bar";
import useAutoIncrementProgress from "./hooks/useAutoIncrementProgress";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const [progress, setProgress] = useAutoIncrementProgress();

  useEffect(() => {
    setProgress(0);
  }, [location.pathname, setProgress]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Alumini-Achivements" element={<Alumini_Achivements_Page />} />
        <Route path="/Alumini_Directory" element={<Alumini_Directory />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Netwoking_Opportunities" element={<Netwoking_Opportunities />} />
      </Routes>
      <LoadingBar color="purple" height={3} progress={progress} />
      <Footer />
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
