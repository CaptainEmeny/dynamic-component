function Filter({tag = 'empty', color = 'white'}){

    const styles = {
        backgroundColor: `${color}` 
    }

    const cardCheck = (e) =>{
        console.log(e.target.id)
    }

    return(
        <button
                style = {styles}
                className = "category-tag" 
                key = {tag}
                id = {tag}>{tag}</button>
    )
}

export default Filter