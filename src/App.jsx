import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Home() {
  return <div className="text-4xl text-center">Homepage</div>;
}
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route Component={Home} path="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
