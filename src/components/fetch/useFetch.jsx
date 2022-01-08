import React from "react"
import axios from "axios"


function useFetch(url) {
    
    const [items, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    React.useEffect(()=> {
        axios.get(url)
            .then((response) => {
                setLoading(false)
                setTimeout(()=>setData(response.data.persons), 2000);                
            })
            .catch((err)=> setError(err))
    }, [url, items]);

    const deleteItem = () => {
        axios.delete(url)
        .then((response)=> {
            setData(response.data)
        })
        .catch((err)=> setError(err))
    }
    
    return {items, loading, error, setData, deleteItem}
    
}

export default useFetch;
