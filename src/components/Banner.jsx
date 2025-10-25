import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: false, // looks cleaner as background
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true, // smooth fade transition
    arrows: false,
    pauseOnHover: false,
  };

  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Slider {...settings} className="h-screen">
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-screen">
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-screen object-cover brightness-75"
            />
            {/* optional overlay if you need stronger darkness */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
