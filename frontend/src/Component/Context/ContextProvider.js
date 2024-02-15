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
    Skills: [
      "HTML",
      "CSS",
      "TAILWIND CSS",
      "JAVASCRIPT",
      "REACT JS",
      "NODE JS",
      "EXPRESS JS",
      "MONGODB",
      "VERSION CONTROL-GIT",
      "CONTEXT API",
      "REDUX",
      "API",
      "C++",
      "DSA",
      "SOCKET IO",
    ],
    projectData: {
      DigitalDoc:{
        url: require("../Projects/ProjctImg/DigitalDoc.PNG"),
        skills: ["React JS", "Express JS", "Node JS", "Tailwind CSS","MongoDB","Socket.io"],
        Notes: [
          "Jan 2024- Feb 2024",
          "A full stack development based project that has similiar functionality of Google Docs like real time screen sharing, Rich text editor and Saving functionality.",
          "Functions are Real Time screen sharing, Multiple User connectivity to a single document, Save Docs to MongoDB, Implementation of Token Authentication, Storing Collaborators that collabs into a single document, Viewing Docs, Rich Text Editor-Quill Text Editor, Socket.io connectivity to connect.",
          "The summary of working of connecting and real Time Sharing- When user connects to the URL where no other is connected then that user is said to be admin. When an admin is present for given url and other user try to connect that url then the admin will be inform about request and admin has power to discard the request or accept it. When admin accepted the request, both will be share the content of doc and information about each other that helps in saving the Shared Document.",
          "If somehow admin gets disconnected, the second user from connected user will become new admin and take all powers of admin like Saving power, Changing Title power, request accepting or discarding powers. "
        ],
        code: "https://github.com/nitin562/Digital-doc",
        video: null,
        deploy: "https://digitaldoc.vercel.app",
      },
      SnakeGame: {
        url: require("../Projects/ProjctImg/SnakeImg.jpg"),
        skills: ["HTML", "JS", "CSS", "LocalStorge", "RequestAnimationFrame"],
        Notes: [
          "An old and familiar game named as Snake Game.",
          "The technologies which are used in this project are HTML, CSS and Java script. It was interesting to make it.",
          "When I was creating it, I faced some problems like appending more snake parts to current snake. Also, I have also created a level option that takes some time because I need to store level value in the home page as well as pass to main game section where I can use to change speed of snake. But solving problems increase my conceptual knowledge and thinking.",
          "Player can view last played score and highest score. Also, user can change the speed of snake with levels option as well as value option.",
          "It is developed only for desktop users.",
        ],
        code: "https://github.com/nitin562/Snake-Game",
        video: null,
        deploy: "https://snake-game-4spnnk2g5-nitin562.vercel.app/",
      },
      NewsMonkey: {
        url: require("../Projects/ProjctImg/NewsMonkey.jpeg"),
        skills: ["REACT JS", "CSS", "JS", "API"],
        Notes:[
          "News Propagator website using External API i.e NewsAPI",
          "News Monkey- A fully responsive application that is an API based web application that uses an external API to fetch news JSON data and displays news under multiple categories i.e. General, Business, Technology and many more. User can view new and fresh news on daily basis. A user can search any news using search option.",
          "This App is developed using react JS framework of Java script, HTML and pure CSS also. This app contains class based component and also routing technique are used in it to fasten up the application functionality.",
          "One thing that may be everyone will notice that some news have same pictures. This is because it is possible that the image URL came from API is unloadable or NULL. To fix this issue, I have taken an image URL which will be used in place of those URLs that have some problem."
        ],
        code:"https://github.com/nitin562/NewsMonkey",
        video:null,
        deploy:null
      },
    },
    Coding: {
      data: [
        {
          date: Date("20-07-2022"),
          title: "Completed 100 LeetCode Questions challenge",
          Msg: `In this Challenge, I have learnt new algorithms and their applications that can't get handy without practical use. Coding is best way to know their applications especially for "Binary Search" , "Graph DFS and BFS algorithm" and "Stacks-Queues algorithms".`,
          view: "View my journey at",
          link: "https://leetcode.com/nitindbas8800/",
        },
      ],
    },
    Cert: {
      data: [
        {
          title: `Hacker Rank JavaScript(Basic) skill test Certificate`,
          id: "9a72827633e0",
          img: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/8b9fc1fa-bb42-45c6-957b-3b6611c542f1.png?ixlib=react-9.0.3&ch=Width%2CDPR&auto=format&w=4088",
          view: "View Complete Certificate at",
          linkId: "https://www.hackerrank.com/certificates/9a72827633e0",
        },
        {
          title: `Hacker Rank JavaScript(Intermediate) skill test Certificate`,
          id: "d26365c55b03",
          img: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/8b9fc1fa-bb42-45c6-957b-3b6611c542f1.png?ixlib=react-9.0.3&ch=Width%2CDPR&auto=format&w=4088",
          view: "View Complete Certificate at",
          linkId: "https://www.hackerrank.com/certificates/d26365c55b03",
        },
        {
          title: `Hacker Rank Problem solving(Basic) skill test Certificate`,
          id: "df5d501d3880",
          img: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/8b9fc1fa-bb42-45c6-957b-3b6611c542f1.png?ixlib=react-9.0.3&ch=Width%2CDPR&auto=format&w=4088",
          view: "View Complete Certificate at",
          linkId: "https://www.hackerrank.com/certificates/df5d501d3880",
        },
      ],
    },
    Participate: {
      data: [
        {
          title:
            "Participated to Hackathon Hack@BVP 5.0 and came under top 30 teams among 100+ teams",
          img: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/641eb7c2f0f18_hackit-at-bvp-20.png?d=1920x557",
          msg: "Hello to Viewers, I am glad to share this news that I had participated in HACK@BVP 5.0. Our team had come in the top 30 teams of hackathon. It was organized by Bharti Vidhyapeet, Delhi and sponsored by Coding Ninja. The hackathon was amazing as we learnt so many things about team work and technologies.",
          topic:
            "Our team had created google map prototype using external APIs and frontend Technology i.e ReactJS. There were some problems occur during developing it like searching places and creating a trip route. These problems had solved with help of great mentorship in hackathon. ",
        },
      ],
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
