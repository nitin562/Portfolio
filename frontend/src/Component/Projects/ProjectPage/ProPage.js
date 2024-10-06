import React, { useEffect, useState } from "react";
import "./page.css";
import { useLocation } from "react-router-dom";
import { useCont } from "../../Context/ContextProvider";
import TitleHeader from "../../TitleHeader/TitleHeader";
import PImg from "./PImg";
import Icon from "../../homeIcon/Icon";
import Slider from "react-slick";
import {Image} from "antd"
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
export default function ProPage() {
  const { state } = useLocation();
  const cont = useCont();
  const [skillsArr, setskillsArr] = useState([]);
  let name=state?.name||sessionStorage.getItem("name")
  const skills = cont.state.Skills;
  const [imgArr, setimgArr] = useState([]);

  let { url, Notes, code, video, deploy, slider,embed } =
    cont.state.projectData[name]?cont.state.projectData[name]:cont.state.InternshipProjects[name]
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const arrayImg = () => {
    console.log(slider,url)
    if(!slider){
      return
    }
    let arr = [];
    for (let i = 1; i <= slider.count; i++) {
      console.log(i,`${slider.base}/${slider.char}${i}.${slider.ext}`);
      arr.push(
        <div key={i} className="w-full bg-[#0000003f] backdrop-blur-xl p-2">
          <Image
            className="w-full lg:w-[50%] m-auto rounded-lg "
            src={`${slider.base}/${slider.char}${i}.${slider.ext}`}
          />
        </div>
      );
    }
    console.log(arr)
    setimgArr(arr);
  };
  const getSkills = () => {

   
    const personalSkills = skills.personal.filter((e) => {
      let skillArr = e.project;
      if (
        skillArr.includes(name) ||
        (skillArr.includes("*") && !skillArr.includes(`#${name}`))
      ) {
        return true;
      }
      return false;
    });

    const specificSkills = skills.specific.filter((e) => {
      let skillArr = e.project;
      if (
        skillArr.includes(name) ||
        (skillArr.includes("*") && !skillArr.includes(`#${name}`))
      ) {
        return true;
      }
      return false;
    });

    setskillsArr([...personalSkills, ...specificSkills]);
    console.log(name, specificSkills, personalSkills);
  };
  useEffect(() => {
    getSkills();
    console.log(state)
    if(state?.name){
      sessionStorage.setItem("name",(state.name))
 
   
    }
    else{
      name=(sessionStorage.getItem("name"))
    }
  }, []);
  useEffect(() => {
    if (imgArr == 0) {
      arrayImg();
    }
  }, [imgArr,slider,url])

  return (
    <div id="ProPage" className="scrollbar beforeTemplate before:bg-[url('../public/graphics/project.avif')] before:blur-md before:opacity-80 before:!fixed ">
      <TitleHeader title={name} />
      <p className="text-3xl  bg-gradient-to-r from-[#caff0a] via-[#11dfff] to-[#4c00ff] bg-clip-text text-transparent md:text-5xl p-2 text-center my-5 font-[poppins]">Take a look of it here</p>
      <div className="w-full md:w-3/4 m-auto px-12 mb-8">
        {slider&&<Slider {...settings} lazyLoad="progressive" autoplay={true} initialSlide={true}>
          {imgArr}
        </Slider>}
        
      </div>
      {embed&&<iframe className="w-3/4 h-3/4 m-auto my-4" src={embed}/>}
      <div className="info">
        <PImg
          url={url}
          code={code}
          video={video}
          deploy={deploy}
          name={name}
        />
        <div className="Notes">
          {Notes.map((e, k) => {
            return (
              <p className="note" key={k}>
                {e}
              </p>
            );
          })}
        </div>
      </div>
      <p className="text-3xl bg-gradient-to-r from-[#ffcc15] via-[#04ffd5] to-[#bc04ff] bg-clip-text text-transparent md:text-5xl p-2 text-center my-5 font-[poppins] ">Know the Stack</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 p-2 border-b-[1px]">
        {skillsArr.map((e, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col border-[1px] rounded-2xl p-4  text-white justify-center items-center gap-2 backdrop-blur-md"
            >
              <div className="text-5xl text-[#16ffc1]">{e.icon}</div>
              <p className="text-center">{e.name}</p>
            </div>
          );
        })}
      </div>
     
      <Icon />
    </div>
  );
}
