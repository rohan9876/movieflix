import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Tvshows from "./Components/Tvshows/Tvshows";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/movies" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/tvshows" element={<Tvshows />} />
      </Routes>
    </Router>
  );
}

export default App;
