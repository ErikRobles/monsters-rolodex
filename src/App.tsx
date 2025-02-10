import { Component, ChangeEvent } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import { Monster } from './types/types'


interface AppState {
  monsters: Monster[];
  searchField: string;
}


class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
   this.state = {
    monsters: [],
    searchField: ''
  }
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }));
}

onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
  const searchField = e.target.value.toLowerCase();
  this.setState(() => {
    return {searchField};
  });
}

render() {

  const { monsters, searchField} = this.state;
  const { onSearchChange } = this;

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
     <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='monsters-search-box' />
      <CardList monsters={filteredMonsters} />
    </ div>
  );
}
}

export default App
