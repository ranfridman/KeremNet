import { useState, useEffect } from "react";
import api from "../../Scripts/API/Api";
const useFetch = <T,>(address: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(address, { timeout: 5000 }); 
        if (response.status === 200) {
          setData(response.data);
          setLoading(false);
        } else {
          setError(response.data);
          setLoading(false);
        }
      } catch (err: any) {
        setError(err.message || "Unknown error");
        setLoading(false);
      }
    };
    getData();
  }, [address]);

  return { data, loading, error };
};

export default useFetch;