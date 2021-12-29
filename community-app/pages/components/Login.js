import React from 'react'
import styles from '../../styles/Login.module.css';

function Login() {



    return (
        <div className={styles.container}>
            <a href='https://kauth.kakao.com/oauth/authorize?client_id=c0353779ecf469855640360bf38de13c&redirect_uri=http://localhost:3000/api/oauth&response_type=code'>
            Login</a>
        </div>
    )
}

export default Login
