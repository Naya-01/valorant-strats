import React from "react";
import FilterCSS from "@/styles/filter.module.scss";

const Card = ({ map, handleClick }) => {
  return (
    <div>
      <div>{map.displayName}</div>
      <img
        id={map.uuid}
        src={map.displayIcon}
        className={FilterCSS.MapImageSize}
        onClick={() => handleClick(map)}
      ></img>
    </div>
  );
};

export default Card;
