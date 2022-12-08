import logo from "./logo.svg";
import HomePage from "./pages/HomePage";
import bg from "./assets/bg.jpg";
function App() {
  return (
    <div
      className="backdrop-blur-sm bg-white/30"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <HomePage />
    </div>
  );
}

export default App;
