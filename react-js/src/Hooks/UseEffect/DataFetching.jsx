import React ,{useState,useEffect} from 'react';
const DataFetching=()=>{
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then ((json)=>{
            setData(json)=> 
        })
    })
}