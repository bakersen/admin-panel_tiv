import axios from "axios";

import React, {useEffect, useState} from "react";



const useFetch = (url)=>{


const [data, setData] = useState([]);
const [loading, setLoading] = useState(true)

const [error, setError] = useState(null)
    

 
useEffect(()=> {
    axios.get(url)
    
        .then((response) => {
            
            setData(response.data)
            setLoading(false)
            
            
        })
        .catch((err)=> {              
                setError(err)
                setLoading(false)           
            })
}, [url, data,loading ]);






     const deleteItem = () => {
        axios.delete(url)
        .then((response)=> {
            setData(response.data)
        })
        .catch((err)=> {
            setError(err.response.status)
            console.log(err.response.status)
        })
    }


return {data, setData, loading, setLoading, deleteItem,error, setError}


}

export default useFetch;