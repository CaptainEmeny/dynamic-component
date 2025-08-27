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


  return(
    <>
    <h1 className = 'title'>PERSONAL CARDS</h1>
    <SearchBar cards= {cards} filterText = {filterText}/>
    <div className = "grid">
      <CategoryBox cards= {cards}/>
      <CardRow cards= {cards}/>
    </div>
    </>
  );
}

export default App
