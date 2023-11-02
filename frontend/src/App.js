import "./App.css";
import { ContextProvider } from "./Component/Context/ContextProvider";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProPage from "./Component/Projects/ProjectPage/ProPage";
import Coding from "./Component/Achievements/Coding/Coding";
import Cert from "./Component/Achievements/Certificates/Cert";
import Participate from "./Component/Achievements/Participations/Participate";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <div id="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:project" element={<ProPage/>}/>
            <Route path="/Coding" element={<Coding/>}/>
            <Route path="/Certificates" element={<Cert/>}/>
            <Route path="/Participate" element={<Participate/>}/>



          </Routes>
         
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
