import React from "react";
import {
  blackColor,
  secondaryColor,
  shadowColor,
  whiteColor,
} from "./ColorSelector";

const DashboardCard = ({ props }) => {
  const { img: Img, title, count, date, color } = props || {};

  //    console.log(Img);

  return (
    <div
      className={`h-[120px] rounded-lg bg-${whiteColor} shadow-sm shadow-${shadowColor} flex gap-6 justify-evenly border-t-4 border-${color}  max-sm:gap-11 items-center`}
    >
      <Img className={`w-12 h-12 text-${secondaryColor}`} />
      <div className={`flex flex-col justify-center gap-1 items-center`}>
        <h2
          className={`text-[1.3em] font-semibold text-${blackColor} text-opacity-75`}
        >
          {title}
        </h2>
        <span className={`text-2xl font-bold text-${secondaryColor}`}>
          {count}
        </span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default DashboardCard;
