import { useState, useEffect } from "react";
import CardsMap from "@/components/maps/cards";
import CardsAgent from "@/components/agents/cards";
import agentService from "@/pages/api/agents";
import mapService from "@/pages/api/maps";
import FilterCSS from "@/styles/filter.module.scss";

const Filter = () => {
  const [agents, setAgents] = useState([]);
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    agentService.getAll().then((response) => {
      setAgents(response.data);
    });

    mapService.getAll().then((response) => {
      setMaps(response.data);
    });
  }, []);

  const handleClick = (obj) => {
    console.log("ID de l'image cliquée :", obj.uuid);
  };

  return (
    <div className={FilterCSS.filter}>
      <div className={FilterCSS.filterMap}>
        <CardsMap maps={maps} handleClick={handleClick} />
      </div>
      <div className={FilterCSS.agentBox}>
        <CardsAgent agents={agents} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Filter;
