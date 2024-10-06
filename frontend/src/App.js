import "./App.css";
import { ContextProvider } from "./Component/Context/ContextProvider";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProPage from "./Component/Projects/ProjectPage/ProPage";
import Coding from "./Component/Achievements/Coding/Coding";
import Cert from "./Component/Achievements/Certificates/Cert";
import Participate from "./Component/Achievements/Participations/Participate";
import Notify from "./Component/Notify";
import { links } from "./links";
import { useEffect } from "react";

function App() {
  //registering service worker and it will only once needed, after it, it will be registered unless a change in service worker occur then it will be again reqgistered done by the code.
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered successfully with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  }
  const pingTheServer = async () => {
    try {
      if(sessionStorage.getItem("ping")==="true"){
        return
      }
      const url = links.ping;
      const response = await fetch(url);
      const result = await response.json();
      if (result.success === false) {
        alert("Server is slow down.");
      }
      else{
        sessionStorage.setItem("ping","true")

      }
    } catch (error) {
      console.log(error)
      alert("Your connection is down. Please try later.");
    }
  };
  useEffect(()=>{
    pingTheServer()
  },[])
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
            <Route path="/notify" element={<Notify/>}/>




          </Routes>
         
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
