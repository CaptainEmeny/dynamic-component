function Card({name = 'Gurt', description = 'Yo.', image = '/images/yogurt.png'}){

    return(
        <div className="card">
            <img className = "card-image" src={image} alt="Deez Nuts"></img>
            <h2 className = "card-header">{name}</h2>
            <p className = "card-text">{description}</p>
        </div>
    );
}

export default Card
