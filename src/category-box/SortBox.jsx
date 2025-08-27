function SortBox(){

    const cardSort = ['id', 'name', 'age'];

    const cardCheck = (e) =>{
        console.log(e.target.id)
    }

    return(
        <div className= 'sort-box'>
            <h2 className = "side-header">Sort</h2>
            {cardSort.map((sort) =>(
                <div key= {sort + `-div`}>
                    <input onChange={cardCheck}
                           className= "category-sort"
                           key= {sort}
                           type="radio" 
                           id={sort}
                           name="cardSort"
                           value= {sort}/>

                    <label htmlFor={sort}>{sort}</label>
                </div>))}
        </div>
    )
}

export default SortBox