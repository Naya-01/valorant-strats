import React from 'react';
import Card from '@/components/agents/card';


const Cards = ({agents}) => {
    console.log(agents,"GOGOGOOGOGGO");
    return (
        <div>
            {agents.map((a) => (
                <Card key={a.uuid} agent={a} />
            ))}
        </div>
    );
}

export default Cards;
