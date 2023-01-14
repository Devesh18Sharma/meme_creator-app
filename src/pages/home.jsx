import React, { useEffect,useState } from 'react';
import MemeCard from '../components/card';
import {getAllMemes} from '../api/memes'
const Homepage=()=>{
    const[Data,SetData]=useState([]);

    useEffect(()=>{
        getAllMemes().then((memes)=>SetData(memes.data.memes));
    },[]);
    return (
        <div className='row'>
            {Data.map((el)=>(
                    <MemeCard img={el.url} title={el.name}/>
                ))}
        </div>
    );
};
export default Homepage;