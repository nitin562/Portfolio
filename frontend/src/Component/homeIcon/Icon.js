import React from "react";
import "./icon.css";
import { useNavigate } from "react-router-dom";
export default function Icon() {
  const nav = useNavigate();
  const GoToHome = () => {
    nav("/");
  };
  return (
    <div className="home">
      <i onClick={GoToHome} className="fa-solid fa-house" title="Home"></i>
    </div>
  );
}
