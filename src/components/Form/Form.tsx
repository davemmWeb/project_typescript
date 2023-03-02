import React, {useState} from 'react'
import styles from "./Form.module.css"
import { Sub } from '../../types'

interface FormState {
    inputValues : Sub
}
interface FormProps {
    onNewSub: (newSub : Sub) => void
}

const Form = ({onNewSub} : FormProps) => {
    const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
        nick : '',
        subMonths : 0,
        avatar : '',
        description : ''
    })

    const inputChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
        const {name} = event.target
        const {value} = event.target
        setInputValues({
            ...inputValues,
            [name] : value
        })
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        onNewSub(inputValues)
    }
  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit}>
            <input type="text" name="nick" value={inputValues.nick} onChange={inputChange} placeholder="Insert Nick"/>
            <input type="text" name="subMonths" value={inputValues.subMonths} onChange={inputChange} placeholder="Insert subMonths"/>
            <input type="text" name="avatar" value={inputValues.avatar} onChange={inputChange} placeholder="Insert avatar"/>
            <input type="text" name="description" value={inputValues.description} onChange={inputChange} placeholder="Insert description"/>
            <button>Save new sub !</button>
        </form>
    </div>
  )
}

export default Form