import React from 'react';
import ListCharacters from '../ListCharacters/ListCharacters'
import { CharactersProvider } from '../../context/CharactersProvider';

const Home = () => {
  return (
    <CharactersProvider>
        <h1>Characters Dragon Ball</h1>   
        <ListCharacters/>  
    </CharactersProvider>
  )
}

export default Home