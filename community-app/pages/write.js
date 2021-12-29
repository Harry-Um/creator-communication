import React from 'react'
import { useState } from 'react'

import styles from '../styles/Write.module.css'

function Write() {

    const [writeName, writeNameState ] = useState('juno');
    const [title, titleState] = useState('');
    const [description, decsState] = useState('');
    const [writeType, typeState] = useState('anonymous')


    return (
        <div className={styles.container}>
            <form action='/api/write' method='POST'>

                <input type="text" id="title" placeholder='제목'/>
            </form>
        </div>
    )
}

export default Write
