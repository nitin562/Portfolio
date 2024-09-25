import React from "react";
import SkillStatus from "./SkillStatus";
import SkillCard from "./SkillCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./skill.css";
export default function SkillClassified({ skill, name, icon }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <div className="w-full  p-6">
      <p className="text-xl p-2 font-[poppins] text-white">
        {icon}
        {name}
      </p>
      <div className="border-l-[1px] border-t-[1px] border-double border-[#ff10ff65] rounded-lg pt-3">
        <Slider {...settings} autoplay={true} initialSlide={true}>
          {skill.map((e, idx) => (
            <SkillCard key={idx} skill={e.name} icon={e.icon} desc={e?.desc}/>
          ))}
        </Slider>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-2 py-4 bg-[#1d2a5911]">
          {skill.map((e, idx) => (
            <SkillStatus
              key={idx * 10}
              name={e.name}
              icon={e.icon}
              level={e.level}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
