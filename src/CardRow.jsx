import React, {useState, useEffect} from 'react' 

import Card from './Card.jsx'


function CardRow({cards}){

    return(
        <div className = 'card-container'>
            {cards.map(person =>(
            <Card key={person.id}
            name={person.name}
            description={person.description}
            image={person.image}
            />))}
        </div>
    )
}

export default CardRow