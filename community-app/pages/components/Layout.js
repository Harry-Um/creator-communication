import React from 'react'
import Link from 'next/link'
import headerStyles from '../../styles/Header.module.css'
import LayoutBox from '../../styles/LayoutBox.module.css'


import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
    return (
        <div className={LayoutBox.container}>

            <Header />
                <div>{children}</div>
            <Footer />
            
        </div>    
    )
}

export default Layout
