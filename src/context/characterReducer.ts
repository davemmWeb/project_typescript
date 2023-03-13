import { Character, CharacterState } from "../types"

type CharacterActions = 
    | { type: 'addCharacter', payload : Character}
    | { type: 'toogleCharacter', payload : { id: string }}


export const characterReducer = (state: CharacterState, action : CharacterActions ): CharacterState=>{
    switch (action.type) {
        case "addCharacter":
            return {
                ...state,
                characters : [...state.characters,action.payload]
            }
    
        default:
            return {
                ...state
            }
    }
}