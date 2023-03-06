import React, {useEffect, useState} from 'react';
import './App.css';
import AddCharacter from './components/AddCharacter/AddCharacter';
import ListCharacters from './components/ListCharacters/ListCharacters';
import { Character } from './types';
import { db } from './data';

const INITIAL_STATE = db

interface States {
  characters : Array<Character>
}


function App() {
  const [characters, setCharacters] = useState<States['characters']>([])
  
  useEffect(()=>{
    setCharacters(INITIAL_STATE)
  },[])

  return (
    <div className="App">
        <h1>Characters Dragon Ball</h1>
        <AddCharacter newCharacter={setCharacters}/>
        <ListCharacters characters={characters}/>
        
    </div>
  );
}

export default App;
