import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Header";
import ToDoList from "./component/ToDoList";
function App() {
  return (
    <div className="App">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
