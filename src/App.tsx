import { useState, useEffect, ChangeEvent } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import { Monster } from './types/types'


const App = () => {
 const [searchField, setSearchField] = useState('');
 const [title, setTitle] = useState('');
 const [monsters, setMonsters] = useState<Monster[]>([]);
 const [filteredMonsters, setFilteredMonsters] = useState(monsters)

 useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setMonsters(users));
 }, []);

 useEffect(() => {
  const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });
  setFilteredMonsters(newFilteredMonsters);
 }, [monsters, searchField]);

  const  onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      const searchFieldString = e.target.value.toLowerCase();
      setSearchField(searchFieldString);
    }

    const  onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const searchFieldString = e.target.value.toLowerCase();
      setTitle(searchFieldString);
    }


     

  return (
    <div className="App">
    <h1 className="app-title">{title}</h1>
   <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='monsters-search-box' />
   <br />
   <SearchBox onChangeHandler={onTitleChange} placeholder='Set Title' className='title-search-box' />
    <CardList monsters={filteredMonsters} />
  </ div>
  )
}

export default App
