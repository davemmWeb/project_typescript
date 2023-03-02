import React, {useEffect, useState} from 'react';
import './App.css';
import Search from './components/Search/Search';
import Form from './components/Form/Form';
import { Sub } from './types';

const INITIAL_STATE = [
  {
  nick : 'dapelu',
  subMonths : 3,
  avatar : "https://i.pravatar.cc/150?u=dapelu",
  description : "Dapelu hace de moderador a veces"
  },
  {
    nick : 'goku',
    subMonths : 4,
    avatar : "https://i.pravatar.cc/150?u=goku"       
  }
]

interface AppState {
  subs : Array<Sub>
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])

    useEffect(()=>{
        setSubs(INITIAL_STATE)
    },[])

    const handleNewSub = (newSub : Sub) : void => {
      setSubs(subs => [...subs, newSub])
    }
  
  return (
    <div className="App">
      <Form onNewSub={handleNewSub}/>
      <Search subs={subs}/>      
    </div>
  );
}

export default App;
