import React from 'react'

import Login from './Login'

import styles from '../../styles/Header.module.css'

function Header() {
    return (
        <div className={styles.container}>
            <h2>커뮤니티</h2>
            <Login />
         </div>
    )
}

export default Header
