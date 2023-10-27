import { createContext, useContext, useRef, useState } from "react";

export const contextCreated = createContext();

export const useCont = () => {
  return useContext(contextCreated);
};

const ContextProvider = (props) => {
  const parameters = {
    references: {
      Home: useRef(0),
      Education: useRef(0),
      Projects: useRef(0),
      Achievements: useRef(0),
      "Contact Me": useRef(0),
    },
    projectData: {
      SnakeGame: {
        url: require("../Projects/ProjctImg/SnakeImg.jpg"),
        skills: ["HTML", "JS", "CSS", "LocalStorge", "RequestAnimationFrame"],
        Notes: [
          "An old and familiar game named as Snake Game.",["The technologies which are used in this project are HTML, CSS and Java script. It was interesting to make it."],
          "When I was creating it, I faced some problems like appending more snake parts to current snake. Also, I have also created a level option that takes some time because I need to store level value in the home page as well as pass to main game section where I can use to change speed of snake. But solving problems increase my conceptual knowledge and thinking.",
          "Player can view last played score and highest score. Also, user can change the speed of snake with levels option as well as value option.",["It is developed only for desktop users."],
        ],
        code:"https://github.com/nitin562/Snake-Game",
        video:null,
        deploy:"https://snake-game-4spnnk2g5-nitin562.vercel.app/"
      },
    },
  };
  const [state, setstate] = useState(parameters);

  return (
    <contextCreated.Provider value={{ state }}>
      {props.children}
    </contextCreated.Provider>
  );
};
export { ContextProvider };
