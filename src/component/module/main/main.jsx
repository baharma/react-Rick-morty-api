import App from '../../../App';
import { motion } from 'framer-motion';
import backgroundVideo from '../../../video/EMPTY INSIDE.mp4';
import InputRef from '../../form/InputRef';
import { useEffect, useRef, useState } from 'react';
import SearchCarakter from '../../hook/Search.jsx';
import Button from '../../form/Button.jsx';
import { useApiUrl } from '../../../api/ApiContext.jsx';

export default function main() {
  const inputRef = useRef();
  const [name, setName] = useState('');
  const { apiUrl } = useApiUrl;
  const Charakter = SearchCarakter(name, apiUrl);

  useEffect(() => {
    console.log(apiUrl);
  }, []);

  const generateName = (event) => {
    event.preventDefault();
    setName(Charakter);
  };

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
            <InputRef ref={inputRef}></InputRef>
            <Button name='Search' type='info search-btn'></Button>
          </div>
        </div>

        <div className={'flex justify-center min-h-48 mb-6 '}>
          <div className={'content-center'}>
            <div className='min-h-48 '>
              <div className={'content-center grid grid-cols-4 gap-4'}>
                <div className='card w-96 bg-base-100 shadow-xl'>
                  <figure>
                    <img
                      src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                      alt='Shoes'
                    />
                  </figure>
                  <div className='card-body bg-slate-800'>
                    <h2 className='card-title'>
                      Shoes!
                      <div className='badge badge-secondary'>NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='card-actions justify-end'>
                      <div className='badge badge-outline'>Fashion</div>
                      <div className='badge badge-outline'>Products</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </App>
    </>
  );
}
