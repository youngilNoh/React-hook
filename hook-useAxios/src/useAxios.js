import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts).then((data) => {
      try {
        setState({
          ...state,
          loading: false,
          data,
        });
      } catch (error) {
        setState({
          ...state,
          loading: false,
          error,
        });
      }
    });
  }, [trigger]);
  if (!opts.url) {
    return;
  }

  return { ...state, refetch };
};

export default useAxios;
