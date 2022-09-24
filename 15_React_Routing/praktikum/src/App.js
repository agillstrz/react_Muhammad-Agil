import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./component/Pages/ErrorPage";
import AboutApp from "./component/AboutApp";
import AboutAuthor from "./component/AboutAuthor";
import About from "./component/Pages/About";
import Home from "./component/Pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />}>
            <Route path="about-App" element={<AboutApp />} />
            <Route path="about-author" element={<AboutAuthor />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
