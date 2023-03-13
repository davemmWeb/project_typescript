import { createContext } from "react";
import { CharacterState } from "../types";

export type CharacterContextProps = {
    characterState : CharacterState
}

export const CharactersContext = createContext<CharacterContextProps>({} as CharacterContextProps)