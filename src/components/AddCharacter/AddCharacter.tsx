import React, {  useState } from 'react'
import styles from "./AddCharacter.module.css"
import { db } from '../../data'



const AddCharacter = () => {

    const [inputsValues, setInputsValues] = useState<string[]>([])

    const handlerChange = (event : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement> ) =>{
        event.preventDefault()
        const {name} = event.target
        const {value} = event.target
        setInputsValues([...inputsValues,value])
    }
    console.log(inputsValues)    


  return (
    <div className={styles.container}>                
            <select value='name' name='name' onChange={handlerChange}>
                <option value="">Select character</option>
                {db.map((value,index)=>{
                    return <option key={index}>{value.name}</option>
                })}
            </select>            
            <button >Add new character</button>
    </div>
  )
}

export default AddCharacter