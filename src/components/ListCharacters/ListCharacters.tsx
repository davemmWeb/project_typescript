import React from 'react'
import styles from "./ListCharacters.module.css"
import { Character } from '../../types'

interface Props {
    characters : Array<Character>
}

const ListCharacters = ({characters} : Props) => {
  return (
    <div className={styles.container}>
            {
                characters.map((value)=>{
                    return <div className={styles.containerCharacter}>                    
                        <h1>{value.name}</h1>
                        <img src={value.image} alt={value.name} />
                        <p>Fight level : {value.fightLevel}</p>
                        <p>Description : {value.description ? value.description: "Not found"}</p>
                    </div>
                    
                })
            }
    </div>
  )
}

export default ListCharacters