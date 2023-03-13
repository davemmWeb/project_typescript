import React from "react"
import { CharactersContext } from "./CharactersContext"
import { Character, CharacterState } from "../types"
import { useReducer } from "react"
import { characterReducer } from "./characterReducer"
import { db } from "../data"

const INITIAL_STATE : CharacterState = {
    characterCount: 2,
    characters: [...db],
    transformado: "Si"
}

interface Props {
    children : JSX.Element | JSX.Element[]
}



export const CharactersProvider = ({ children} : Props) => {

    const [characterState, dispatch] = useReducer(characterReducer, INITIAL_STATE)
  return (
    <CharactersContext.Provider value={{
        characterState
    }}>
        { children }
    </CharactersContext.Provider>
  )
}
