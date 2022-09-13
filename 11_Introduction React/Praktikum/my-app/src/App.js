import "./assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <div className="home-background">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
