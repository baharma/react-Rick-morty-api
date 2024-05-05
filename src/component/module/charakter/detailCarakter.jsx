import { useEffect, useState } from 'react';
import App from '../../../App';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function DetailCharakter() {
  const { id } = useParams();
  const [character, setCharacters] = useState([]);
  const apiUrl = `${import.meta.env.VITE_REACT_APP_API_URL}/character/${id}`;

  const [apiResponseEpisoder, setApiResponseEpisoder] = useState([]);
  useEffect(() => {
    const data = async () => {
      const response = await axios.get(apiUrl);
      setCharacters(response.data);
    };
    data();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (character && character.episode) {
        const promises = character.episode.map(async (element) => {
          const apiResponse = await axios.get(element);
          return apiResponse.data;
        });
        const responses = await Promise.all(promises);
        setApiResponseEpisoder(responses);
      }
    };
    fetchData();
  }, [character]);

  console.log(apiResponseEpisoder);

  return (
    <>
      <App>
        <div className='grid justify-items-start '>
          <div className='card lg:card-side bg-base-500 shadow-xl m-24'>
            <figure>
              <img src={character.image} alt='Album' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{character.name}</h2>
              <p>
                Gender : {character.gender} <br />
                Location : {character.origin && character.origin.name} <br />
                Spesies : {character.species}
              </p>

              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>{character.status}</button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full rounded-none'>
          <div className='grid h-20 card bg-base-300 rounded-box place-items-center rounded-none'>
            <h2>Episode Show This Character</h2>
          </div>
        </div>

        <div className={'flex justify-center min-h-48 mb-6 '}>
          <div className={'content-center'}>
            <div className='min-h-48 '>
              <div className={'content-center grid grid-cols-4 gap-4'}>
                {apiResponseEpisoder.map((event) => (
                  <div className='card w-96 bg-base-100 shadow-xl' key={event.id}>
                    <div className='card-body'>
                      <h2 className='card-title'>{event.episode}</h2>
                      <p>{event.name}</p>
                      <div className='card-actions justify-end'>
                        <button className='btn btn-primary'>Air Date {event.air_date}</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </App>
    </>
  );
}
