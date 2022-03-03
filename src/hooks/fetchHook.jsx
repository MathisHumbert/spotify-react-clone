import { useEffect, useState } from 'react';
import axios from 'axios';
import { useGlobalContext } from '../context/context';

const useFetch = (url) => {
  const { userToken } = useGlobalContext();

  const [status, setStatus] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.length === 0) {
      setStatus('no url');
      return;
    }

    // const fetchData = async () => {
    //   try {
    //     const { data } = await axios(url, {
    //       headers: {
    //         Authorization: `Bearer ${userToken}`,
    //       },
    //     });
    //     setData(data.items);
    //     setStatus('success');
    //   } catch (error) {
    //     setStatus(error.response);
    //   }
    // };

    // fetchData();

    const fetcMultipleData = async () => {
      const allPromise = Promise.all([
        axios(url[0], {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }),
        axios(url[1], {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }),
      ]);

      try {
        const values = allPromise;
        console.log(values);
      } catch (error) {
        console.log(error);
      }
    };
  }, [url]);

  return { status, data };
};

export default useFetch;
