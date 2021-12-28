import React from 'react'
import Link from  'next/link'
import styles from '../styles/Contents.module.css'
import ContentBox from './components/ContentBox'


function index() {
  return (
    <div className={styles.container}>
      <ContentBox />
      <ContentBox />
      <ContentBox />
      <ContentBox />
      <ContentBox />
      <ContentBox />
      <ContentBox />
      <ContentBox />
      <ContentBox />
    </div>
  )
}

export default index
