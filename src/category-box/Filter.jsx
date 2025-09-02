function Filter({tag = 'empty', color = 'white', settings, setSettings}){

    const filterTags = (e) => {
        const filter = e.target.id;

        //Add to make it active
        if (filter !== settings.tag){
            
            document.getElementById(settings.tag)?.classList.remove('active'); //Remove active from previous
            
            setSettings(s => ({...s, 'tag': filter}));
            e.target.classList.add('active');

        } else{
            setSettings(s => ({...s, 'tag': ''}));
            e.target.classList.remove('active');

        }
    }

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