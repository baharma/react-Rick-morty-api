import { useEffect, useState } from 'react';
import { useApiUrl } from '../../api/ApiContext';
import axios from 'axios';
import { data } from 'autoprefixer';

export default function heroUi({ children }) {
  const { apiUrl, token } = useApiUrl();
  const [firstNews, setFirstNews] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`${apiUrl}/everything/`, { params });
      setFirstNews(data.articles[0]);
    }
    fetchData().catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div
        className='hero min-h-96 bg-base-200'
        style={{
          backgroundImage:
            `url(${firstNews.urlToImage})`,
        }}
      >
        <div className={'hero-content flex-col lg:flex-row'}>
          <h1 className='text-5xl text-white font-bold'>Haiya</h1>
          <div>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
