import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

import styles from '../../styles/Footer.module.css'

function Footer() {

    var [commButton, commButtonState] = useState({"background-color":"#4480F7"})
    var [anonyButton, anonyButtonState] = useState({"background-color":"white"})
    var [myPageButton, myPageButtonState] = useState({"background-color":"white"})


    function activateState(style){
        return (style? "red":"white")
    }

    function selectedState(a,b,c){
        a({"background-color":"#4480F7"});
        b({"background-color":"white"});
        c({"background-color":"white"});
    }
    
    return (
        <div className={styles.container}>
            <ul>
                <li style={commButton}  onClick={function(){selectedState(commButtonState,anonyButtonState,myPageButtonState)}}><Link href="/"><a>커뮤니티</a></Link></li>
                <li style={anonyButton} onClick={function(){selectedState(anonyButtonState,commButtonState,myPageButtonState)}}><Link href="/anonymous"><a>익명방</a></Link></li>
                <li style={myPageButton} onClick={function(){selectedState(myPageButtonState,anonyButtonState,commButtonState)}}><Link href="/mypage"><a>마이 페이지</a></Link></li>
            </ul>
        </div>
    )
}

export default Footer
