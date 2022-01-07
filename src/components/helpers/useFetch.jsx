import axios from "axios";

import React, {useEffect, useState} from "react";



const useFetch = (url)=>{


const [data, setData] = useState([]);
const [loading, setLoading] = useState(true)

const [error, setError] = useState(null)
    

 
useEffect(()=> {
    axios.get(url)
    
        .then((response) => {
            
            setData(response.data.posts)
            
            
            
        })
        .catch((err)=> setError(err))
}, [url, data ]);






    function deleteItem() {
        axios.delete(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => setError(err));
    }


return {data, setData, loading, setLoading, deleteItem}


}

export default useFetch;