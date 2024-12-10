import {useState, useEffect} from 'react'
import axios from 'axios'

const useApi = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data)
    } catch (e) {
      setError(e.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])


  return {fetchData, data, setData}
}

export default useApi;