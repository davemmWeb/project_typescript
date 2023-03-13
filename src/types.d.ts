export interface Character {
  name : string
  image : string
  fightLevel : string
  description? : string
}

export interface CharacterState {
  characterCount: number
  characters : Character[]
  transformado : string
}


