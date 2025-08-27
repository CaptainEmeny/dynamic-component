function Card({name = '???', description = 'This user has no description', image = 'images/yogurt.png'}){


    //Builds the card
    return(
        <div className="card">
            <h2 className = "card-header">{name}</h2>
            <p className = "card-text">{description}</p>
            <img className = "card-image" src={image} alt={name + "'s picture"}></img>
        </div>
    );
}

export default Card
