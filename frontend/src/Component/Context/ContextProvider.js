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
      Experience: useRef(0),
      Projects: useRef(0),
      Achievements: useRef(0),
      "Contact Me": useRef(0),
    },
    Skills: {
      personal: [
        {
          name: "HTML",
          icon: <i className="fa-brands fa-html5 "></i>,
          level: 90,
          project: ["*"],
        },
        {
          name: "CSS",
          icon: <i className="fa-brands fa-css3-alt "></i>,
          level: 90,
          project: ["*"],
        },
        {
          name: "Tailwind CSS",
          icon: <i className="fa-brands fa-css3-alt "></i>, // Tailwind doesn't have a direct icon, reusing CSS icon
          level: 95,
          project: ["*"],
        },
        {
          name: "JavaScript",
          icon: <i className="fa-brands fa-js "></i>,
          level: 90,
          project: ["*"],
        },
        {
          name: "React JS",
          icon: <i className="fa-brands fa-react "></i>,
          level: 95,
          project: ["#SnakeGame", "#VanderEngines", "#USAAUTOPARTS", "*"],
        },
        {
          name: "Node JS",
          icon: <i className="fa-brands fa-node-js "></i>,
          level: 90,
          project: [
            "#SnakeGame",
            "#VanderEngines",
            "#USAAUTOPARTS",
            "#NewsMonkey",
            "#ChatApp",
            "*",
          ],
        },
        {
          name: "Express JS",
          icon: <i className="fa-brands fa-node-js "></i>, // Same Node.js icon
          level: 90,
          project: [
            "#SnakeGame",
            "#VanderEngines",
            "#USAAUTOPARTS",
            "#NewsMonkey",
            "#ChatApp",
            "*",
          ],
        },
        {
          name: "MongoDB",
          icon: <i className="fa-solid fa-database "></i>,
          level: 90,
          project: [
            "#SnakeGame",
            "#VanderEngines",
            "#USAAUTOPARTS",
            "#NewsMonkey",
            "#ChatApp",
            "*",
          ],
        },
        {
          name: "Python",
          icon: <i class="fa-brands fa-python"></i>,
          level: 80,
          project: ["ChatApp"],
        },
        {
          name: "Django",
          icon: <i class="fa-brands fa-dev"></i>,
          level: 80,
          project: ["ChatApp"],
        },
        {
          name: "Django-Channels",
          icon: <i class="fa-solid fa-group-arrows-rotate"></i>,
          level: 80,
          project: ["ChatApp"],
        },
        {
          name: "Django ORM",
          icon: <i class="fa-solid fa-file-waveform"></i>,
          level: 80,
          project: ["ChatApp"],
        },
        {
          name: "MySQL",
          icon: <i className="fa-solid fa-database "></i>, // Same icon as MongoDB
          level: 90,
          project: ["VanderEngines", "ChatApp"],
        },
        {
          name: "Git",
          icon: <i className="fa-brands fa-github "></i>,
          level: 90,
          project: ["*"],
        },
        {
          name: "Context API",
          icon: <i className="fa-solid fa-globe "></i>,
          level: 95,
          project: ["DigitalDocs"],
        },
        {
          name: "Redux",
          icon: <i className="fa-solid fa-globe "></i>, // Using generic globe icon for Redux
          level: 90,
          project: ["DigitalDocs", "ChatApp"],
        },
        {
          name: "REST API",
          icon: <i className="fa-solid fa-server "></i>,
          level: 95,
          project: ["#SnakeGame", "*"],
        },
        {
          name: "PHP",
          icon: <i className="fa-brands fa-php "></i>,
          level: 90,
          project: ["VanderEngines", "USAAUTOPARTS"],
        },
        {
          name: "AWS",
          icon: <i className="fa-brands fa-aws "></i>,
          level: 90,
          project: ["CRM"],
        },
        {
          name: "Ant Design",
          icon: <i className="fa-solid fa-a "></i>,
          level: 95,
          project: ["CRM"],
        },
        {
          name: "C++",
          icon: <i className="fa-solid fa-c "></i>,
          level: 85,
          project: [],
        },
        {
          name: "DSA",
          icon: <i className="fa-solid fa-chart-simple "></i>,
          level: 85,
          project: [],
        },
        {
          name: "Socket.io",
          icon: <i className="fa-brands fa-rocketchat "></i>,
          level: 95,
          project: ["DigitalDocs"],
        },
      ],
      specific: [
        {
          name: "SDLC",
          icon: <i className="fa-solid fa-arrows-spin"></i>,
          level: 90,
          desc: "Web Apps developed according to SDLC.",
          project: ["VanderEngines", "DigitalDocs", "CRM", "USAAUTOPARTS"],
        },
        {
          name: "Payment Gateway",
          icon: <i className="fa-brands fa-paypal"></i>,
          level: 90,
          desc: "Live Integration of PayPal & Stripe payment gateway.",
          project: ["VanderEngines"],
        },
        {
          name: "Email System",
          icon: <i className="fa-solid fa-envelope"></i>,
          level: 95,
          desc: "Sending and Recieving emails in real time - Worked For CRM.",
          project: ["CRM"],
        },
        {
          name: "SMS System",
          icon: <i className="fa-solid fa-message"></i>,
          level: 95,
          desc: "Sending and Recieving sms in real time via ringcentral - Worked For CRM.",
          project: ["CRM"],
        },
        {
          name: "Deployment",
          icon: <i className="fa-solid fa-globe"></i>,
          level: 95,
          desc: "Deploy and manage Full Stack Website like E-commerce and CRM with AWS and Hostinger.",
          project: ["*"],
        },
        {
          name: "Debugging",
          icon: <i className="fa-solid fa-bug-slash"></i>,
          level: 95,
          desc: "Resolving bugs and error in devlopement and production stages.",
          project: ["*"],
        },
      ],
    },
    projectData: {
      ChatApp: {
        url: require("../Projects/ProjctImg/chatapp.jpg"),
        skills: [
          "React JS",
          "Python",
          "Django",
          "Tailwind CSS",
          "MySQL",
          "Django-Channels",
          "Django-ORM",
        ],
        Notes: [
          "Designed and developed a full-stack real-time chat application using Python and Django - Currently in development Phase",
          "Integrated Django Channels and WebSockets to enable bi-directional communication between users for a seamless live chat experience",
          "Built a robust authentication system with user registration, login, logout, and session handling",
          "Implemented individual (one-on-one) chats and scalable group chat functionality with dynamic room creation",
          "Utilized Sqlite as the primary relational database for storing user data and message history",
          "Developed an intuitive and responsive frontend using ReactJS, Tailwind CSS, JavaScript, and WebSocket API for real-time message updates without refreshing the page",
          "Added visual indicators for message delivery status, new messages, and active users",
          "Enabled file sharing features such as image uploads and document sharing directly within the chat interface",
          "Applied user access control and permission handling for chat rooms and admin-only features",
          "Followed best practices for code structure, modularity, and reusable components to ensure maintainability",
          "Ensured high performance through asynchronous handling and optimized database queries",
          "Made the app mobile-friendly and responsive to work well across devices",
          "Focused on delivering a secure, fast, and user-centric communication platform suitable for teams, communities, or customer support systems",
        ],
        code: "https://github.com/nitin562/-chatapp",
        video: null,
        deploy: null,
      },
      DigitalDoc: {
        url: require("../Projects/ProjctImg/DigitalDoc.PNG"),
        slider: {
          count: 11,
          char: "D",
          ext: "png",
          base: "./DigitalDocImgs",
        },
        skills: [
          "React JS",
          "Express JS",
          "Node JS",
          "Tailwind CSS",
          "MongoDB",
          "Socket.io",
        ],
        Notes: [
          "A Web App to connect workers in one environment",
          "A full stack development based project that has similiar functionality of Google Docs like real time screen sharing, Rich text editor and Saving functionality.",
          "Functions are Real Time screen sharing, Multiple User connectivity to a single document, Save Docs to MongoDB, Implementation of Token Authentication, Storing Collaborators that collabs into a single document, Viewing Docs, Rich Text Editor-Quill Text Editor, Socket.io connectivity to connect.",
          "The summary of working of connecting and real Time Sharing- When user connects to the URL where no other is connected then that user is said to be admin. When an admin is present for given url and other user try to connect that url then the admin will be inform about request and admin has power to discard the request or accept it. When admin accepted the request, both will be share the content of doc and information about each other that helps in saving the Shared Document.",
          "If somehow admin gets disconnected, the second user from connected user will become new admin and take all powers of admin like Saving power, Changing Title power, request accepting or discarding powers. ",
        ],
        code: "https://github.com/nitin562/Digital-doc",
        video: null,
        deploy: "https://digitaldoc.vercel.app",
      },
      SnakeGame: {
        url: require("../Projects/ProjctImg/SnakeImg.jpg"),
        slider: {
          count: 6,
          char: "S",
          ext: "png",
          base: "/SnakeImgs",
        },
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
        slider: {
          count: 6,
          char: "N",
          ext: "png",
          base: "/MonkeyImgs",
        },
        skills: ["REACT JS", "CSS", "JS", "API"],
        Notes: [
          "News Propagator website using External API i.e NewsAPI",
          "News Monkey- A fully responsive application that is an API based web application that uses an external API to fetch news JSON data and displays news under multiple categories i.e. General, Business, Technology and many more. User can view new and fresh news on daily basis. A user can search any news using search option.",
          "This App is developed using react JS framework of Java script, HTML and pure CSS also. This app contains class based component and also routing technique are used in it to fasten up the application functionality.",
          "One thing that may be everyone will notice that some news have same pictures. This is because it is possible that the image URL came from API is unloadable or NULL. To fix this issue, I have taken an image URL which will be used in place of those URLs that have some problem.",
        ],
        code: "https://github.com/nitin562/NewsMonkey",
        video: null,
        deploy: null,
      },
    },
    InternshipProjects: {
      VanderEngines: {
        url: "/vanderenginesLogo.png",
        slider: {
          count: 12,
          char: "V",
          ext: "png",
          base: "/VanderEngines",
        },
        skills: [
          "PHP",
          "Javascript",
          "Mysql",
          "HTML",
          "Deployment",
          "Payment Gateway",
        ],
        Notes: [
          "An E-Commerce platform for engines and transmissions",
          "It is a complete full Stack Project that uses Core HTML/CSS/JS for frontend and Php with MYSQL For backend part.",
          "In This, I have developed a special form that has ability to generate the options as dropdown from the Database.",
          "When the Form is searched with these dynamic values, we will have a product always. No Stock Problem will never arise here.",
          "This functionality is added to all other form also.",
          "I have created all crud operations that an e-commerce platform has.",
          "The most important thing is Payment Gateway. I have added PayPal Payment gateway to this website. Also, I tested it live with real money by created a dummy product of $1.",
          "I have added a searchbar that will have an input and will provide the most matched product from database irrespective of different kinds of value.",
          "I have added Cart Section that helps user to add products. It works also when user is not logged in.",
          "During this project, i learnt to bulk insertion of data from csv file to MYSQL database. I used to add this data files into it.",
          "New Skills Learnt are PHP, Payment Gateway integration and SQL Queries",
        ],
        code: null,
        video: null,
        deploy: "https://www.vanderengines.com",
      },
      CRM: {
        url: "/crmlogo.jpg",
        slider: {
          count: 16,
          char: "C",
          ext: "png",
          base: "/CRM",
        },
        skills: ["MERN", "ANTD", "AWS", "Ringcentral API", "IMAP"],
        Notes: [
          "A Well developed CRM For agents to handle leads and tasks.",
          "I developed a comprehensive MERN-based CRM application designed with three distinct panels for Agents, Admins, and Superadmins, each tailored to specific roles and responsibilities.",
          "The system features an email integration that allows real-time reception of leads from websites like Vander Engines and USA Auto Parts, enabling agents to efficiently manage client communication by sending and receiving emails directly within the platform.",
          "Agents also benefit from full CRUD operations for managing quotations, as well as features like an integrated chat system, follow-up section, and a task management calendar to organize their workflow.",
          "For Admins, the CRM offers lead distribution and redistribution capabilities, along with tools to track agent performance and a powerful search functionality for monitoring lead progress.",
          "Super Admins have enhanced access, allowing them to view and manage any user's dashboard without the need for credentials.",
          "Additionally, the platform integrates the RingCentral API for seamless messaging, and a webhook system is implemented to notify users of new messages in real time. ",
          "his CRM provides a robust solution for managing leads, communication, and overall productivity in a streamlined manner.",
        ],
        code: null,
        video: null,
        deploy: "https://vanderenginestransmissions.com/",
      },
      USAAUTOPARTS: {
        url: "/usa.png",
        skills: ["REACT JS", "CSS", "JS", "API"],
        Notes: [
          "A Frontend Project for Selling Parts in USA Market",
          ,
          "As a Frontend Developer for the USA Auto Parts website, I was responsible for designing and developing the user interface using HTML, CSS, and JavaScript, ensuring a smooth and responsive experience for users. I worked closely with the backend team to integrate lead capture functionality, allowing real-time lead generation through a seamless connection with the PHP backend. My role also involved optimizing the website for cross-device compatibility, ensuring it was fully responsive and accessible across various browsers and devices. Additionally, I focused on enhancing the UI/UX, improving navigation and creating an intuitive, user-friendly interface to boost overall engagement and usability.",
        ],
        code: null,
        video: null,
        deploy: "https://usaauto-parts.com",
        embed: "https://usaauto-parts.com/transmissions/acura-transmission.php",
      },
    },
    experience: [
      {
        year: 2024,
        heading: "Full Stack Web Developer",
        type: "Internship",
        address: (
          <a href="https://www.linkedin.com/company/ss-techservices/">
            SS TECH SERVICES, Noida, Uttar Pradesh
          </a>
        ),
        time: "3 June to 3 Sep",
        desc: "As a passionate and dedicated Full Stack Web Developer, I had the opportunity to enhance my skills during an enriching internship experience in SS TECH SERVICES, Noida, Uttar Pradesh. Over the course of 3 months, I worked on multiple projects that allowed me to leverage my expertise in both frontend and backend technologies.  I developed and enhanced various web applications, applying a wide range of technologies and best practices. I gained hands-on experience with HTML, CSS, Tailwind CSS, and JavaScript for creating responsive and dynamic interfaces. I built robust backend systems using Node JS, Express JS, and MongoDB, and worked with MySQL for database management. My expertise in React JS, Context API, and Redux allowed me to implement complex state management in applications. Additionally, I integrated REST APIs, payment gateways (PayPal & Stripe). I also gained experience with PHP, AWS for deployment, and Ant Design for UI components. This internship sharpened my debugging skills, familiarized me with the Software Development Life Cycle (SDLC), and enabled me to develop, deploy, and manage full-stack web applications, including E-commerce and CRM systems.",
        projects: [
          {
            name: "CRM",
            alias: "CRM",
            tip: "A Well developed CRM For agents to handle leads, tasks, emails and messages.",
          },
          {
            name: "Vander Engines",
            alias: "VanderEngines",
            tip: "An E-Commerce platform for engines and transmissions from CRUD Operation to Payment Gateway",
          },
          {
            name: "USA auto parts",
            alias: "USAAUTOPARTS",
            tip: "A Frontend Project for Selling Parts in USA Market",
          },
        ],
      },
    ],
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
      slider: {
        count: 4,
        char: "C",
        ext: "png",
        base: "/certificates",
      },
      data: [
        {
          title: `SS TECH SERVICES`,
          icon: (
            <img
              className="w-6 h-6 rounded-full"
              src="/certificates/sstechLogo.jpeg"
            />
          ),

          h1: "Full Stack Web Developer (3-Months)",
          h2: "Gained rich quality of work experience with diverse technologies and tech Stack",

          img: "/certificates/C1.png",
        },
        {
          title: `HACKER RANK`,
          icon: (
            <img
              className="w-8 h-8 rounded-full"
              src="/certificates/HackerRank.avif"
            />
          ),
          h1: "Basic JavaScript",
          h2: "skill test Certificate",
          id: "9a72827633e0",
          img: "/certificates/C2.png",
          view: "View Complete Certificate at",
          linkId: "https://www.hackerrank.com/certificates/9a72827633e0",
        },
        {
          title: `HACKER RANK`,
          icon: (
            <img
              className="w-8 h-8 rounded-full"
              src="/certificates/HackerRank.avif"
            />
          ),

          h1: "Intermediate JavaScript",
          h2: "skill test Certificate",
          id: "d26365c55b03",
          img: "/certificates/C4.png",
          view: "View Complete Certificate at",
          linkId: "https://www.hackerrank.com/certificates/d26365c55b03",
        },
        {
          title: `HACKER RANK`,
          icon: (
            <img
              className="w-8 h-8 rounded-full"
              src="/certificates/HackerRank.avif"
            />
          ),

          h1: "Problem Solving",
          h2: "skill test Certificate",
          id: "df5d501d3880",
          img: "/certificates/C3.png",
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
