import React, {useEffect, useState} from 'react'
import styles from "./Search.module.css"
import { Sub } from '../../types'

interface Props {
    subs : Array<Sub>
}


const Search = ({subs} : Props) => {

  return (
      <div className={styles.container}>
        <h1>Subs</h1>
        <ul>
            {
                subs.map(sub=>{
                    return (
                        <li key={sub.nick}>
                            <img src={sub.avatar} alt={sub.nick} />
                            <h4>{sub.nick}(<small>{sub.subMonths}</small>)</h4>
                            <p>{sub.description?.substring(0,10)}</p>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Search