import FilterBox from './FilterBox'
import SortBox from './SortBox'


function CategoryBox(){

    return(
        <div className= "category-box">
            <SortBox/>
            <FilterBox/>
        </div>
    )
}

export default CategoryBox