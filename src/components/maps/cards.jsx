import React from "react";
import Card from "@/components/maps/card";

const Cards = ({ maps, handleClick }) => {
  return (
    <div>
      {maps.map((a) => (
        <Card key={a.uuid} map={a} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Cards;
