import React from "react"
import axios from "axios"


function useFetch(url) {
    
    const [posts, setPostsData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const baseURL = url

    React.useEffect(()=> {
        setLoading(true)
        axios.get(url)
            .then((response) => setPostsData(response.data))
            .catch((err)=> setError(err))
    }, [url]);

    
    return {posts, loading, error, baseURL}
    
}

export default useFetch;
