import React from 'react'
import {Link} from 'react-router-dom'
import styles from './GetStart.module.css'

const GetStart = () => {
  return (
    <div className={styles.container}>
        <Link to={'/home'}>
            <button>Get start</button>
        </Link>
    </div>
  )
}

export default GetStart