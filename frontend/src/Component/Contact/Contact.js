import React, { useState } from "react";
import "./contact.css";
import { useInView } from "react-intersection-observer";
import { message } from "antd";
import { useCont } from "../Context/ContextProvider";
import CInput from "./CInput";
import { links } from "../../links";
export default function Contact() {
  const cont = useCont();
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: false, // Animates only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });
  const [Name, setName] = useState("");
  const [body, setbody] = useState("");
  const [subject, setsubject] = useState("")
  const [from, setfrom] = useState("");
  const [errors, seterrors] = useState({});
  const [loader, setloader] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();
  const send = async () => {
    setloader(true)
    const url = links.sendMail;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        body,
        subject,
        name: Name,
      }),
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.success === true) {
        messageApi.info(
          "Thanks for Contacting with us. We'll shortly connect to you."
        );
        seterrors({});
        setName("");
        setfrom("");
        setbody("");
        setsubject("")
      } else {
        if (result.msg === "ClientSide") {
          seterrors(result.error);
        } else {
          messageApi.info("Server Error occured, Please try again later.");
        }
      }
    } catch (error) {
      console.error(error)
      messageApi.info("Your Connection is down. Please try later.");
    }
    setloader(false)
  };
  return (
    <div id="Contact" ref={cont.state.references["Contact Me"]}>
      {contextHolder}
      <p
        className={`transition-all duration-500 `}
        style={{
          transform: skillsInView ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        TALK TO ME
      </p>
      <div className="contacts" ref={skillsRef}>
        <div className="w-full px-4 md:px-8 left flex flex-col gap-4 items-center justify-center  py-6">
          <div className="w-full  flex flex-col lg:flex-row items-center gap-8">
            <CInput
              state={Name}
              change={(e) => setName(e.target.value)}
              icon="fa-solid fa-user"
              tag={"Name"}
              placeholder={"Enter Your Name"}
              className="w-full lg:w-1/2"
              name="name"
              error={errors}
            />
            <CInput
              state={from}
              change={(e) => setfrom(e.target.value)}
              icon="fa-solid fa-envelope"
              tag={"Email"}
              placeholder={"Enter Your Email"}
              className="w-full lg:w-1/2"
              name="from"
              error={errors}
            />
          </div>
          <CInput
            state={subject}
            change={(e) => setsubject(e.target.value)}
            icon="fa-solid fa-tag"
            tag={"Subject"}
            placeholder={"Enter Your Subject"}
            name="subject"
            error={errors}
          />
          <CInput
            state={body}
            change={(e) => setbody(e.target.value)}
            icon="fa-solid fa-message"
            tag={"Query"}
            placeholder={"Enter Your Query"}
            input={false}
            name="body"
            error={errors}
          />
          <div className="w-full">
            <button
            disabled={loader}
              onClick={send}
              className="float-right text-white bg-[#04b3fe97] border-[1px] border-transparent p-2 rounded-lg px-4 text-lg font-[Quicksand] hover:border-[#04fefc] transition-all duration-300 hover:text-[#04fefc] flex items-center gap-2 hover:bg-transparent"
            >
              {!loader?<i className="fa-solid fa-paper-plane"></i>:<span className="loader"></span>}{!loader?"Send":"Sending"}
            </button>
           
          </div>
        </div>
        <div className="right">
          <img src={require("../../Images/Intro.gif")} alt="" />
        </div>
      </div>
    </div>
  );
}
