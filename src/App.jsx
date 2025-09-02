import React, {useState, useEffect} from 'react'
import CardRow from './CardRow.jsx'
import CategoryBox from './category-box/CategoryBox.jsx'
import SearchBar from './SearchBar.jsx'

import people from './assets/people.json'

function App() {

  //Look up how to send function into child component

  const [cards, setCards] = useState(people);
  const [settings, setSettings] = useState({'sortBy': 'id', 'filterBy': '', 'tag': ''});


  useEffect(() => {
    let tempCards = people;
    //Filter Tag
    tempCards = tempCards.filter(({tags}) => tags.includes(settings.tag));
    
    //Filter Text
    tempCards = tempCards.filter(({name}) => name.toLowerCase().includes(settings.filterBy));

    //Sort
    settings.sortBy === 'name' ? tempCards.sort((a, b) => a.name.localeCompare(b.name))
                               : tempCards.sort((a,b) => a.id - b.id);
    setCards([...tempCards]);
    return () => {};
  }, [settings]);


  return(
    <>
    <h1 className = 'title'>PERSONAL CARDS</h1>
    <div className = "grid">
      <SearchBar settings= {settings} setSettings = {setSettings}/>
      <CategoryBox settings = {settings} setSettings = {setSettings}/>
      <CardRow cards= {cards}/>
    </div>
    </>
  );
}

export default App
