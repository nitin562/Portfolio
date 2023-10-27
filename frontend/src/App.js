import "./App.css";
import { ContextProvider } from "./Component/Context/ContextProvider";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProPage from "./Component/Projects/ProjectPage/ProPage";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <div id="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:project" element={<ProPage/>}/>
          </Routes>
         
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
