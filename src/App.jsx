import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Comman_Components/NavBar";
import Homepage from "./Page/Homepage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route Component={Homepage} path="/" />
        </Routes>
      </Router>

    </>
  );
}

export default App;
