import "./App.css";
import { ContextProvider } from "./Component/Context/ContextProvider";
import Home from "./Component/Home";

function App() {
  return (
    <ContextProvider>
      <div id="App">
        <Home />
      </div>
    </ContextProvider>
  );
}

export default App;
