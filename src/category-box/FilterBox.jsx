import Filter from './Filter.jsx'

function FilterBox({settings, setSettings}){

    const cardFilter = [{'tag': 'real', 'color': '#3c68fa'}, {'tag':'drawn', 'color': '#ff5959'}];

    return(
        <>
            <h2 className= 'side-header'>Filter</h2>
            <div className= 'filter-box'>
                {cardFilter.map((filter)=>(
                    <Filter 
                    key= {filter.tag}
                    tag= {filter.tag} 
                    color= {filter.color}
                    settings = {settings}
                    setSettings = {setSettings}/>
                ))}
            </div>
        </>
    )
}

export default FilterBox