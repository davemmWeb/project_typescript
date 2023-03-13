import React, {useContext, useState} from 'react'
import styles from "./ListCharacters.module.css"
import { CharactersContext } from '../../context/CharactersContext'
import { Character } from '../../types'

const ListCharacters = () => {

  const {characterState} = useContext(CharactersContext)
  const {characters} = characterState

  const [showCharacter, setShowCharacter] = useState<Character[]>([])

  const handlerChange = (event : React.ChangeEvent<HTMLSelectElement>) =>{
    const {value} = event.target
    const newCharacter = characters.filter(char=>char.name === value)
    setShowCharacter([...showCharacter, ...newCharacter])
  }
  return (
    <div >
      <select name="" id="" onChange={handlerChange}>
        <option value="">Select Character</option>
        {
          [characters.map((value,index)=>{
            return <option key={index} value={value.name}>{value.name}</option>
          })]
        }
      </select>
      <div className={styles.container}>
        {
          [
            showCharacter.map((char,index)=>{
            return <div key={index} className={styles.containerChar}>
              <p>Name : {char.name}</p>
              <p>Fight level : {char.fightLevel}</p>
              <img src={char.image} alt={char.name} />
              <p>Description : {char.description? char.description: 'Not found'}</p>
            </div>
          })
          ]
        }
      </div>
    </div>

  )
}

export default ListCharacters