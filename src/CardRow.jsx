import Card from './Card.jsx'
import people from './assets/people.json'


function CardRow(){

    return(
        <>
        <Card name={people[0].name} description={people[0].description} image={people[0].image}/>
        <Card name={people[1].name} description={people[1].description} image={people[1].image}/>
        <Card/>
        <Card/>
        </>
    )
}

export default CardRow