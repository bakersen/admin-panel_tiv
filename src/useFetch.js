/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from "react"
import axios from "axios"

function useFetch(url) {
    
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    return useEffect(() => {
        setLoading(true)
        axios.get(url)
        .then((res) => {
            setData(res.data)
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [url]);
}

export default useFetch;
