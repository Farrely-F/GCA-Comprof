import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true initially

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Handle the error and set loading to false
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, setLoading };
}

export default useFetch;
