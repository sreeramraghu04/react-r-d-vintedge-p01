import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, //* Optional - auto slide
    autoplaySpeed: 3000, //* 3 Seconds
    arrows: false, //* Optional - hides prev/next
  };
  return (
    <Slider {...settings}>
      <div className="bg-stone-800 relative h-[30vh]">
        <img
          src={img1}
          alt=""
          className="w-[100vw] h-[500px] object-cover absolute mix-blend-overlay"
        />
        <div className="flex justify-start pt-24 text-white flex-col gap-6 items-center">
          <h1 className="font-bold text-7xl tracking-wide">your move</h1>
          <p className="text-2xl font-semibold tracking-wider font-title">
            power with future
          </p>
        </div>
      </div>
      <div className="bg-stone-800 relative h-[30vh]">
        <img
          src={img2}
          alt=""
          className="w-[100vw] h-[500px] object-cover absolute mix-blend-overlay"
        />
        <div className="flex justify-start pt-24 text-white flex-col gap-6 items-center">
          <h1 className="font-bold text-7xl tracking-wide">perfect touch</h1>
          <p className="text-2xl font-semibold tracking-wider font-title">
            perfectly organized
          </p>
        </div>
      </div>
      <div className="bg-stone-800 relative h-[30vh]">
        <img
          src={img3}
          alt=""
          className="w-[100vw] h-[500px] object-cover absolute mix-blend-overlay"
        />
        <div className="flex justify-start pt-24 text-white flex-col gap-6 items-center">
          <h1 className="font-bold text-7xl tracking-wide">classic designed</h1>
          <p className="text-2xl font-semibold tracking-wider font-title">
            eligant in nature
          </p>
        </div>
      </div>
      <div className="bg-stone-800 relative h-[30vh]">
        <img
          src={img4}
          alt=""
          className="w-[100vw] h-[500px] object-cover absolute mix-blend-overlay"
        />
        <div className="flex justify-start pt-24 text-white flex-col gap-6 items-center">
          <h1 className="font-bold text-7xl tracking-wide">featured tech</h1>
          <p className="text-2xl font-semibold tracking-wider font-title">
            more featured
          </p>
        </div>
      </div>
      <div className="bg-stone-800 relative h-[30vh]">
        <img
          src={img5}
          alt=""
          className="w-[100vw] h-[500px] object-cover absolute mix-blend-overlay"
        />
        <div className="flex justify-start pt-24 text-white flex-col gap-6 items-center">
          <h1 className="font-bold text-7xl tracking-wide">latest one</h1>
          <p className="text-2xl font-semibold tracking-wider font-title">
            demanded with future
          </p>
        </div>
      </div>
    </Slider>
  );
}
