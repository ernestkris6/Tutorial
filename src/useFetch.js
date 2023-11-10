import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending]  = useState(true);
    const [error, setError] = useState(null);


    
useEffect(()=> {
    setTimeout(()=>{
      fetch(url)
      .then(res => {
          return res.json()
          if(!res.ok) {
            throw Error('Could not fetch data!')
          }
      })
      .then(data => {
        setData(data)
        setIsPending(false)
      })
      .catch(err => {
        setError(err.message);
      })
  
    }, 2000)
      
  }, [url])
    return {data, isPending, error}
}
 
export default useFetch;