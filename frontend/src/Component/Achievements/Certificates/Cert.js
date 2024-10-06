import React, { useEffect, useState } from "react";
import TitleHeader from "../../TitleHeader/TitleHeader.js";
import "./cert.css";
import { useCont } from "../../Context/ContextProvider.js";
import Icon from "../../homeIcon/Icon.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "antd";
export default function Cert() {
  const cont = useCont();
  const slider = cont.state.Cert.slider;
  const [imgArr, setimgArr] = useState([]);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const arrayImg = () => {
    if (!slider) {
      return;
    }
    let arr = [];
    for (let i = 1; i <= slider.count; i++) {
      console.log(i, `${slider.base}/${slider.char}${i}.${slider.ext}`);
      arr.push(
        <div key={i} className="w-full bg-[#0000003f] backdrop-blur-xl p-2">
          <Image
            className="w-full lg:w-[50%] m-auto rounded-lg "
            src={`${slider.base}/${slider.char}${i}.${slider.ext}`}
          />
        </div>
      );
    }
    console.log(arr);
    setimgArr(arr);
  };
  useEffect(() => {
    if (imgArr == 0) {
      arrayImg();
    }
  }, [imgArr, slider]);
  return (
    <div id="Cert" className="scrollbar beforeTemplate before:bg-[url('../public/graphics/achieve.avif')] before:opacity-35 before:!fixed ">
      <TitleHeader title="CERTIFICATES" />
      <div className="w-full md:w-1/2 m-auto px-12 mb-8">
        {slider && (
          <Slider
            {...settings}
            lazyLoad="progressive"
            autoplay={true}
            initialSlide={true}
          >
            {imgArr}
          </Slider>
        )}
      </div>
      <div className="catalog flex-wrap px-8 gap-4 mb-8">
        {cont.state.Cert.data.map((e, i) => {
          return (
            <div key={i} style={{cursor:e.view?"pointer":"default"}} onClick={()=>{
              if(e.view){
                window.open(e.linkId)
              }
            }} className="w-full md:w-[25rem] cursor-default group flex flex-col overflow-hidden relative ">
              {e.img && <img src={e.img} className="rounded-xl w-full h-auto" alt="img" />}

              <div className="w-full bg-[#2c0567] backdrop-blur-lg rounded-xl absolute top-full -translate-y-12 px-2 pb-5 group-hover:-translate-y-full  hover:translate-y-0 transition-all duration-300 ">
                <div className="text-2xl  font-[poppins] p-2 flex gap-2 justify-center text-[#ffffff] items-center">
                  {e.icon}
                  {e.title}
                </div>
                {e.h1 && <p className="font-[Quicksand] text-ld  rounded-xl text-lg text-[#ffe1f5] w-fit">{e.h1}</p>}
                {e.h2 && <p className="font-[Quicksand] text-md   rounded-xl text-[#fff9ab] w-fit">{e.h2}</p>}
                {e.id&&<p className="font-[poppins] text-sm text-yellow-200">Crediential ID:{e.id}</p>}
                
              </div>
              {/* <div className="date"><i className="fa-regular fa-clock"></i><p>{getDate(e.date)}</p></div> */}
            </div>
          );
        })}
      </div>
      <Icon />
    </div>
  );
}
