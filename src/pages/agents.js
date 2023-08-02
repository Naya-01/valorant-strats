import { useState, useEffect } from 'react'
import agentService from '@/pages/api/agents'
import Cards from '@/components/agents/cards'

const Agents = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        agentService.getAll().then( response => {
            console.log(response, "gogoogogo");
            setAgents(response.data)
        })
    }, []);

    return (
        <div>
            <Cards  agents={agents}/>
        </div>
    );
}

export default Agents;
