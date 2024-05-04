import App from '../../../App';
import { motion } from 'framer-motion';
import backgroundVideo from '../../../video/EMPTY INSIDE.mp4';
import InputRef from '../../form/InputRef';
import { useEffect, useRef, useState } from 'react';
import Button from '../../form/Button.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../../ui/card.jsx';

export default function main() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const apiUrl = `${import.meta.env.VITE_REACT_APP_API_URL}/character`;

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setCharacters(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <App>
        <div className='hero bg-slate-700 '>
          <video loop autoPlay muted className={'video-background '}>
            <source src={backgroundVideo} type='video/mp4' />
          </video>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className=''
            >
              <img
                src='https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Rick_and_Morty_season_3.png/250px-Rick_and_Morty_season_3.png'
                className='rounded-full max-w-sm rounded-lg shadow-2xl '
              />
            </motion.div>

            <div className='px-60 text-zinc-100'>
              <h1 className='text-5xl font-bold'>
                Rick And Morty Api Search Your Info This Animation
              </h1>
            </div>
          </div>
        </div>

        <div className={'flex justify-center min-h-48  mt-4'}>
          <div className={'content-center flex'}>
            <InputRef
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Button name='Search' type='info search-btn'></Button>
          </div>
        </div>

        <div className={'flex justify-center min-h-48 mb-6 '}>
          <div className={'content-center'}>
            <div className='min-h-48 '>
              <div className={'content-center grid grid-cols-4 gap-4'}>
                {characters
                  .filter((character) =>
                    name.toLowerCase() === ''
                      ? true
                      : character.name.toLowerCase().includes(name),
                  )
                  .map((filteredCharacter) => (
                    <Link
                      key={filteredCharacter.id}
                      to={`detail-charakter/${filteredCharacter.id}`}
                    >
                      <Card event={filteredCharacter} />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </App>
    </>
  );
}
