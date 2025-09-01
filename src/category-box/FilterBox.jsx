import React, {useState} from 'react'
import Filter from './Filter.jsx'

function FilterBox({filterTags}){

    const cardFilter = [{'tag': 'real', 'color': '#3c68fa'}, {'tag':'drawn', 'color': '#149916'}, {'tag':'fruit', 'color': '#ff5959'}, {'tag':'animated', 'color': '#e4ba13ff'}];

    return(
        <>
            <h2 className= 'side-header'>Filter</h2>
            <div className= 'filter-box'>
                {cardFilter.map((filter)=>(
                    <Filter 
                    key= {filter.tag}
                    tag= {filter.tag} 
                    color= {filter.color}
                    filterTags = {filterTags}/>
                ))}
            </div>
        </>
    )
}

export default FilterBox