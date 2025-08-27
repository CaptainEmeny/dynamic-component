import CardRow from './CardRow.jsx'


function SearchBar({cards, filterText}){


    return(
        <div className = 'search-bar'>
            <input id= 'searchBar' onChange = {(e) => filterText(e)} type = 'text' placeholder = 'Enter card name'/>
        </div>
    )
}

export default SearchBar