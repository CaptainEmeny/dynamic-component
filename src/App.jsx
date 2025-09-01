import React, {useState} from 'react'
import CardRow from './CardRow.jsx'
import CategoryBox from './category-box/CategoryBox.jsx'
import SearchBar from './SearchBar.jsx'

import people from './assets/people.json'

function App() {

  //Look up how to send function into child component

  const [cards, setCards] = useState(people);


  

  const filterText = (e) => {
    const filter = e.target.value.toLowerCase();
    setCards(people.filter(({name}) => name.toLowerCase().includes(filter)));
  }


  const filterTags = (e) => {
      const tag = e.target.id;
      const filter = people.filter(({tags})=> tags.includes(tag));


      setCards(filter);
  }
  

  return(
    <>
    <h1 className = 'title'>PERSONAL CARDS</h1>
    <div className = "grid">
      <SearchBar cards= {cards} filterText = {filterText}/>
      <CategoryBox cards= {cards} filterTags = {filterTags}/>
      <CardRow cards= {cards}/>
    </div>
    </>
  );
}

export default App
