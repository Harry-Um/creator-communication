import React from 'react'
import { useState } from 'react'


import styles from '../../styles/ContentBox.module.css'


function ContentBox() {

    const [name, nameState] = useState('Juno');


    return (
        <div className={styles.container}>
            {name}
        </div>
    )
}

export default ContentBox
