function Sort({sort, setSettings}) {

    const radioCheck = (e) => {
        const selection = e.target.id;
        setSettings(s => ({...s, 'sortBy': selection}));
    }

    return (
        <>
            <input className = "category-sort"
                   onChange={radioCheck}
                           key= {sort + '-input'}
                           type= "radio" 
                           id={sort}
                           name="cardSort"
                           value= {sort}/>
                    <label className = {sort + '-label'}htmlFor={sort}>{sort}</label><br/>
        </>
    )
}

export default Sort