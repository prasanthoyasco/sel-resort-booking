import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import "./main.css";
import Home from "./pages/Home";


function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <Router>
      {/* NAVIGATION */}
      

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
