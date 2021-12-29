import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';


import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';

import styles from '../../styles/ContentBox.module.css'



function Content() {


    var [contentData, contentState] = useState([])

    const datas = async function(){
        var response = await axios.get('/api/user');
        var json = await response.json();
        const content = json.map(function(data){
           return <div>
               <header><h1 style={{marginRight:"5px"}}>{data.name}</h1><StarIcon style={{marginTop:"12px", fontSize:"18px",color:"orange"}}></StarIcon><h1 style={{color:"orange"}}>{data.influence}</h1></header>
               <p style={{marginTop:"2px"}}>{data.description}</p>
               <footer><VisibilityIcon style={{fontSize:'15px', marginRight:"5px"}}></VisibilityIcon>{data.viewd}</footer>
               </div>
        })
        return content;
    }






    return (
        <div className={styles.container}>
            {/* {content} */}
        </div>
    )
}


export default Content
