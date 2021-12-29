import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

import styles from '../../styles/Footer.module.css'

import ChatIcon from '@mui/icons-material/Chat';

function Footer() {

    var [commButton, commButtonState] = useState({"backgroundColor":"#4480F7"})
    var [anonyButton, anonyButtonState] = useState({"backgroundColor":"white"})
    var [myPageButton, myPageButtonState] = useState({"backgroundColor":"white"})


    function activateState(style){
        return (style? "red":"white")
    }

    function selectedState(a,b,c){
        a({"backgroundColor":"#4480F7"});
        b({"backgroundColor":"white"});
        c({"backgroundColor":"white"});
    }
    
    return (
        <div className={styles.container}>
            <ul>
                <li ><ChatIcon className={styles.icon}/><Link href='/'><a >커뮤니티</a></Link></li>
                <li ><ChatIcon className={styles.icon}/><Link href='/anonymous'><a>익명톡</a></Link></li>
                <li ><ChatIcon className={styles.icon} /><Link href='/mypage'><a>마이 페이지</a></Link></li>
            </ul>
        </div>
    )
}

export default Footer
