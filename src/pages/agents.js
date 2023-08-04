import { useState, useEffect } from 'react'
import agentService from '@/pages/api/agents'
import mapService from '@/pages/api/agents'
import Cards from '@/components/agents/cards'
import Scroll from '@/styles/AgentCard.module.scss'

const Agents = () => {
    const [agents, setAgents] = useState([]);
    const [map, setmap] = useState([]);

    useEffect(() => {
        agentService.getAll().then( response => {
            setAgents(response.data)
        })

        mapService.getAll().then( response => {
            setmap(response.data)
        })
    }, []);

    return (<>


        <div className={Scroll.divIcons}>
            <Cards  agents={agents}/>
        </div>
        <div>
            
        </div>


        </>);
}

export default Agents;
