import React from "react"
import axios from "axios"


function useFetch(url) {
    
    const [items, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(()=> {
        axios.get(url)
            .then((response) => {
                setLoading(true)
                setTimeout(()=>setData(response.data), 2000);                
            })
            .catch((err)=> setError(err))
    }, [url, items]);

    const deleteItem = () => {
        axios.delete(url)
        .then((response)=> {
            setData(response.data)
            console.log('Okay you are trying to delete')
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