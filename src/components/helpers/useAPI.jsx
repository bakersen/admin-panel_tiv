import React from "react"
import axios from "axios"


function useFetch(url) {
    
    
    const [items, setData] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const baseURL = url

    React.useEffect(()=> {
        axios.get(url)
            .then((response) => {
                setData(response.data)
                setLoading(false)                             
            })
            .catch((err)=> setError(err))
    }, [url, items, isLoading]);

    const deleteItem = () => {
        axios.delete(url)
        .then((response)=> {
            setData(response.data)
        })
        .catch((err)=> {
            setError(err.response.status)
            console.log(error)
        })
    }

    const editItem = (newData) => {
        axios.patch(url, {deadline: `${newData}`})
        .then((response)=> {
            setTimeout(()=>setData(response.data), 2000);
            setLoading(false)
        })
        .catch((err)=> {
            setError(err)
            console.log("Error")
        })
    }
    
    return {items, isLoading, error, setData, deleteItem, editItem, baseURL}
    
}

export default useFetch;