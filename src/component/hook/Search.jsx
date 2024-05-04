import axios from 'axios';
import { useEffect, useState } from 'react';

const SearchCarakter = (name, apiUrl) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const response = async () => {
      if (name) {
        const dataResponse = await axios.get(`${apiUrl}`);
        const dataset = await dataResponse.json();
        console.log(dataset);
        setData(dataset);
      } else {
        const dataResponse = await axios.get(`${apiUrl}`);
        const dataset = await dataResponse.json();
        setData(dataset);
      }
    };
  }, []);

  return [data];
};

export default SearchCarakter;
