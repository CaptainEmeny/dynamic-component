import Sort from './Sort.jsx'

function SortBox({setSettings}){

    const cardSort = ['id', 'name'];

    return(
        <>
        <h2 className = "side-header">Sort</h2>
            <div className= 'sort-box'>
                {cardSort.map((sort) =>(
                    <Sort key= {sort}
                          sort= {sort} 
                          setSettings = {setSettings}/>
                ))}
            </div>
        </>
    )
}

export default SortBox