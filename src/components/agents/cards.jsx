import React from "react";
import Card from "@/components/agents/card";
import FilterCSS from "@/styles/filter.module.scss";

const Cards = ({ agents, handleClick }) => {
  return (
    <div className={FilterCSS.agentIcon}>
      {agents.map((a) => (
        <Card key={a.uuid} agent={a} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Cards;
