import FilterBox from './FilterBox'
import SortBox from './SortBox'


function CategoryBox({settings, setSettings}){

    return(
        <div className= "category-box">
            <SortBox settings = {settings} setSettings = {setSettings}/>
            <FilterBox settings = {settings} setSettings = {setSettings}/>
        </div>
    )
}

export default CategoryBox