import FilterBox from './FilterBox'
import SortBox from './SortBox'


function CategoryBox({filterTags}){

    return(
        <div className= "category-box">
            <SortBox/>
            <FilterBox filterTags = {filterTags}/>
        </div>
    )
}

export default CategoryBox