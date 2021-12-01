import React from "react"
import axios from "axios"


function useFetch(url) {
    
    const [items, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    React.useEffect(()=> {
        axios.get(url)
            .then((response) => {
                setData(response.data)
                setLoading(false)
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

    const editItem = (newData) => {
        axios.patch(url, {body: `${newData}`})
        .then((response)=> {
            setData(response.data)
            console.log(items.body)
        })
        .catch((err)=> setError(err))
    }
    
    return {items, loading, error, setData, deleteItem, editItem}
    
}

export default useFetch;