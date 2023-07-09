import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url);
                if(!res.ok){
                    setError(result.data);
                }
                const result = await res.json();
                setData(result.data)
                console.log(setData)

            } catch (err) {
                setError(err)

            }
            setLoading(false)
        };
        fetchData();
    }, [url])
    return {
        data,
        error,
        loading,
        setData,

    }
};

export default useFetch;