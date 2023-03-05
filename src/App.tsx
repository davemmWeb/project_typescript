import React, {useEffect, useState} from 'react';
import './App.css';
import AddCharacter from './components/AddCharacter/AddCharacter';
import ListCharacters from './components/ListCharacters/ListCharacters';
import { Character } from './types';

const INITIAL_STATE = [
  {
    name : 'goku',
    image : 'https://th.bing.com/th/id/OIP.G8PgE5TFJ409XbBK-lC5KwHaI4?pid=ImgDet&rs=1',
    fightLevel : 100,
    description : 'el sayayin mas fuerte'
  },
  {
    name : 'vegeta',
    image : 'https://th.bing.com/th/id/R.435954deb66dfdbe774f64919df1b172?rik=4doKApL0B8R3Rg&riu=http%3a%2f%2fpostfiles6.naver.net%2f20160608_37%2ftjdgkr6936_14653668669338dPGS_JPEG%2fwon2_20160608_150114.jpg%3ftype%3dw2&ehk=Rr01oONDRvgWm9yBiiBISWYNYU0OQHGgGJNvHqWRvPc%3d&risl=&pid=ImgRaw&r=0',
    fightLevel : 90,
    description : 'el principe de los sayayin'
  },

] 
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
