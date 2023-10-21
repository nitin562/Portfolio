import { createContext, useContext, useRef, useState } from "react";

export const contextCreated = createContext();

export const useCont=()=>{ return useContext(contextCreated)}

const ContextProvider = (props) => {
  const parameters = {
    references: {
      Home: useRef(0),
      Education: useRef(0),
      Projects: useRef(0),
      Achievements: useRef(0),
      "Contact Me": useRef(0)
    },
  };
  const [state, setstate] = useState(parameters)

  return <contextCreated.Provider value={{state}}>{props.children}</contextCreated.Provider>;
};
export {ContextProvider}
