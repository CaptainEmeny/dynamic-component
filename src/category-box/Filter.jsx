function Filter({tag = 'empty', color = 'white', filterTags}){

    const styles = {
        backgroundColor: `${color}` 
    }


    return(
        <button
                style = {styles}
                className = "category-tag"
                key = {tag}
                onClick = {filterTags}
                id = {tag}>{tag}</button>
    )
}

export default Filter