import React,{useEffect, useState} from 'react'
import ListCharacters from '../ListCharacters/ListCharacters'
import { db } from '../../data';
import { Character } from '../../types';
import AddCharacter from '../AddCharacter/AddCharacter';


const INITIAL_STATE = db

interface States {
  characters : Array<Character>
}

const Home = () => {
    const [characters, setCharacters] = useState<States['characters']>([])
  
    useEffect(()=>{
        setCharacters(INITIAL_STATE)
    },[])
  return (
    <div>
        <h1>Characters Dragon Ball</h1>     
        <AddCharacter newCharacter={setCharacters}/>
        <ListCharacters  characters={characters}/>
    </div>
  )
}

export default Home