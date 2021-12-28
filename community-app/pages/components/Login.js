import React from 'react'
import styles from '../../styles/Login.module.css';

function Login() {



    return (
        <div className={styles.container}>
            <a href='https://kauth.kakao.com/oauth/authorize?client_id=53eb46579b52771fa00819eece830902&REDIRECT_URI=http://127.0.0.1:8080/callback/kakao&response_type=code'>
            Login</a>
        </div>
    )
}

export default Login
