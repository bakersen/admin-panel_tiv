import React from "react"
import axios from "axios"


function useAPI(url) {
    
    
    const [items, setData] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)
    const [isError, setError] = React.useState('')
    const baseURL = url

    React.useEffect(()=> {
        axios.get(url)
            .then((response) => {
                setData(response.data)
                setLoading(false) 
                console.log(items)                              
            })
            .catch((err)=> {              
                setError(err)
                setLoading(false)           
            })
    }, [url, items, isLoading]);

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
    
    return {items, isLoading, isError, setData, deleteItem, editItem, baseURL}
    
}

export default useAPI;