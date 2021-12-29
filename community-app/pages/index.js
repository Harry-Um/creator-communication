import React from 'react'
import Link from  'next/link'
import styles from '../styles/Main.module.css'
import Content from './components/Content'
import Login from './components/Login'


function index() {
  return (
    <div className={styles.container}>
      <Content />
    </div>
  )
}

export default index
