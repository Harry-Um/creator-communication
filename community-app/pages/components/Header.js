import React from 'react'
import Image from 'next/image'
import Login from './Login'

import styles from '../../styles/Header.module.css'


function Header() {
    return (
        <div className={styles.container}>
            <header>
                <Image src="/meercat.png" height={"30px"} width="30px" ></Image><h2>커뮤니티</h2>
                <Login></Login>
            </header>
         </div>
    )
}

export default Header
