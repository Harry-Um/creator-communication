import React from 'react'
import { useState } from 'react'

import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';

import styles from '../../styles/ContentBox.module.css'



function Content() {

    var datas = [{name:"Juno", influence:"5" ,title:"품앗이 요청", description:"월세 대신 관리비 인상하는 임대인 있다라 지난해 7월 개정된 임대차 3법이 주된 이유입니다.aasdfdasfasfasdㅁㄴㅇㄹㅁ아너휴무함너흄낳ㅁㄴ유하ㅓㅁㄴㅇㄹㅎㅁㄴㅇㄹ",viewd:5},{name:"Dean", influence:"132" ,title:"품앗이 요청", description:"월세 대신 관리비 인상하는 임대인 있다라 지난해 7월 개정된 임대차 3법이 주된 이유입니다.",viewd:123}]

    const content = datas.map(function(data){
       return <div>
           <header><h1 style={{marginRight:"5px"}}>{data.name}</h1><StarIcon style={{marginTop:"12px", fontSize:"18px",color:"orange"}}></StarIcon><h1 style={{color:"orange"}}>{data.influence}</h1></header>
           <p style={{marginTop:"2px"}}>{data.description}</p>
           <footer><VisibilityIcon style={{fontSize:'15px', marginRight:"5px"}}></VisibilityIcon>{data.viewd}</footer>
           </div>
    })


    return (
        <div className={styles.container}>
            {content}
        </div>
    )
}

export default Content
