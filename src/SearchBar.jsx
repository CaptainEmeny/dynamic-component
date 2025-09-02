import CardRow from './CardRow.jsx'


function SearchBar({settings, setSettings}){

    const getValue = (e) => {
        const filter = e.target.value.toLowerCase();

        setSettings(s => ({...s, 'filterBy': filter}));
    }

    return(
        <div className = 'search-bar'>
            <input id= 'searchBar' onChange = {(e) => getValue(e)} type = 'text' placeholder = 'Enter card name'/>
        </div>
    )
}

export default SearchBar