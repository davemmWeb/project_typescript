import React, { ReactElement, useState } from 'react'
import { TypeElement } from 'typescript'
import { Character } from '../../types'
import styles from "./AddCharacter.module.css"

interface stateform {
    inputsValues : Character
}
interface propsForm {
    newCharacter: React.Dispatch<React.SetStateAction<Character[]>>
}

const AddCharacter = ({newCharacter}: propsForm) => {
    const [inputsValues, setInputsValues] = useState<stateform['inputsValues']>({
        name : '',
        image : '',
        fightLevel : '',
        description : ''
    })
    const handlerChange = (event : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement> ) =>{
        event.preventDefault()
        const {name} = event.target
        const {value} = event.target
        setInputsValues({
            ...inputsValues,
            [name] : value
        })
    }
    const handlerSubmit = (event : React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        newCharacter(character => [...character, inputsValues])
    }

    const level : Array<ReactElement> = []

    for (let i = 0; i <= 100; i++) {
        level.push(<option key={i} value={i}>{i}</option>)
    }

  return (
    <div className={styles.container}>
        <form onSubmit={handlerSubmit}>
            <input value={inputsValues.name} type="text"placeholder='Add name'  name='name' onChange={handlerChange}/>
            <input value={inputsValues.image} type="text"placeholder='Add "URL" image' name='image' onChange={handlerChange}/>
            <select value={inputsValues.fightLevel} name='fightLevel' onChange={handlerChange}>
                <option value="">Level</option>
                {level}
            </select>            
            <textarea value={inputsValues.description} placeholder='Add description' name='description' onChange={handlerChange}/>
            <button >Add new character</button>
        </form>    
    </div>
  )
}

export default AddCharacter