import React from 'react';

const Card = ({agent}) => {

    console.log(agent.displayName, "zebi")
    return (
        <div>
            {agent.displayName}
        </div>
    );
}

export default Card;
