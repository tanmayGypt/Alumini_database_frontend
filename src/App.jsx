import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Comman_Components/NavBar";
import Homepage from "./Page/Homepage";
import Sidebar from "./Page-Components/Alumini-Directory/Sidebar";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="flex pt-20">
          <Sidebar />
          <div className="flex-grow">
            <Routes>
              <Route Component={Homepage} path="/" />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
