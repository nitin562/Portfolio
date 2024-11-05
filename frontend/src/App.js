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
  if ('serviceWorker' in navigator && 'SyncManager' in window) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(async (registration) => {
        try {
        if(sessionStorage.getItem("ping")=="true"){
          return;
        }
          await registration.sync.register('ping-server');
          sessionStorage.setItem("ping","true")
          console.log('Background sync registered for ping-server');
        } catch (error) {
          console.error('Sync registration failed:', error);
        }
        console.log('Service Worker registered successfully with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  }
  const triggerPing = async () => {
    
  
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      const registration = await navigator.serviceWorker.ready;
      await registration.sync.register('ping-server');
      sessionStorage.setItem("ping","true")
      console.log('Ping-server sync event registered');
    }
  }
  // useEffect(()=>{
  //   if(sessionStorage.getItem("ping")=="true"){
  //     return;
  //   }
  //   window.addEventListener("load",triggerPing)
  //   return ()=>{
  //     window.removeEventListener("load",triggerPing);
  //   }
  // },[])

  return (
    <BrowserRouter>
      <ContextProvider>
        <div id="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:project" element={<ProPage />} />
            <Route path="/Coding" element={<Coding />} />
            <Route path="/Certificates" element={<Cert />} />
            <Route path="/Participate" element={<Participate />} />
            <Route path="/notify" element={<Notify />} />




          </Routes>

        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
