import "./App.css";
import { Provider } from "react-redux";
import { Routers } from "./Router/Routers";
import { persistor, store } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routers />
      </PersistGate>
    </Provider>
  );
}

export default App;
