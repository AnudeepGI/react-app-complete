import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export const useAxiosFetch = (axiosParams) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.request(axiosParams);
      setData(response.data);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading, fetchData };
};