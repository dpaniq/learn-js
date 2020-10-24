import React from 'react';
import {useState, useEffect} from 'react'
import './App.css';

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from "./components/search-box/search-box.component";

function App() {

    const [search, setSearch] = useState('')
    const [monsters, setMonsters] = useState([]);

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setMonsters(json))
    })

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search))

    return (
        <div className="App">
            <h1>Monster Laboratories</h1>
            <SearchBox placeholder='Search Monster' handleSearch={handleSearch}/>
            <CardList monster={filteredMonsters}/>
        </div>
    );
}

export default App;
