import React from "react"
import axios from "axios"


function useFetch(url) {
    
    const [posts, setPostsData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const baseURL = url

    React.useEffect(()=> {
        axios.get(url)
            .then((response) => {
                setPostsData(response.data)
                setLoading(false)
            })
            .catch((err)=> setError(err))
    }, [url, posts]);

    const deleteItem = () => {
        axios.delete(url)
        .then((response)=> {
            setPostsData(response.data)
        })
        .catch((err)=> setError(err))
    }
    
    
    return {posts, loading, error, baseURL, deleteItem}
    
}

export default useFetch;