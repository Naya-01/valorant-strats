import React from "react";
import FilterCSS from "@/styles/filter.module.scss";

const Card = ({ agent, handleClick }) => {
  return (
    <img
      id={agent.uuid}
      src={agent.displayIconSmall}
      onClick={() => handleClick(agent)}
    ></img>
  );
};

export default Card;
