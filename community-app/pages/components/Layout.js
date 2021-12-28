import React from 'react'
import Link from 'next/link'
import headerStyles from '../../styles/Header.module.css'
import footerStyles from '../../styles/Footer.module.css'
import LayoutBox from '../../styles/LayoutBox.module.css'
import Login from './Login'

function Layout({children}) {
    return (
        <div className={LayoutBox.container}>
            <div className={headerStyles.container}>
            <h2>커뮤니티</h2>
            </div>
            <div>{children}</div>
            <div className={footerStyles.container}>
                <ul>
                    <li><Link href="/community"><a>커뮤니티</a></Link></li>
                    <li><Link href="/anonymous"><a>익명방</a></Link></li>
                    <li><Link href="/mypage"><a>마이 페이지</a></Link></li>
                    <li><Login /></li>
                </ul>
            </div>
        </div>    
    )
}

export default Layout
