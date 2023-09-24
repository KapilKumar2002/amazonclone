import Slider from "react-slick";
// import { sliders } from "../constants";
import {
  ArrowBackIosRoundedIcon,
  ArrowForwardIosRoundedIcon,
} from "../assets/icons";
import { useState } from "react";
import { sliders } from "../constants";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="max-md:w-8 w-14 max-md:h-20 h-40 bg-transparent hover:border-2 duration-300 rounded-md text-2xl text-black-400 flex justify-center items-center absolute top-0 right-5 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <ArrowForwardIosRoundedIcon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="max-md:w-8 w-14 max-md:h-20 h-40 bg-transparent hover:border-2 duration-300 rounded-md text-2xl text-black-400 flex justify-center items-center absolute top-0 left-5 shadow-shadowOne cursor-pointer z-10 "
      onClick={onClick}
    >
      <ArrowBackIosRoundedIcon />
    </div>
  );
}
const Carousel = () => {
  const [dotActive, setDocActive] = useState(0);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },

    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <Slider {...settings}>
    {sliders.map((e) => (
      <a href={e.href}>
      <div className="top-1/3  max-container flex flex-col xl:flex-row justify-between">
        <div className="rounded-lg shadow-shadowOne flex flex-col md:flex-row xl:flex-col gap-8 justify-center md:justify-start xl:justify-center ">
          <img className="object-cover " src={e.imgsrc} alt="sliderimage" />
        </div>
      </div>
      </a>
    ))}
  </Slider>
  );
};

export default Carousel;
