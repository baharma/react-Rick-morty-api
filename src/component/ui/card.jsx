import { motion } from 'framer-motion';

export default function Card({ event }) {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 10,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <>
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className='card w-96 bg-base-100 shadow-xl text-zinc-100'>
          <motion.div variants={cardVariants}>
            <figure className=''>
              <img style={{ width: '100%' }} src={event.image} alt='Shoes' />
            </figure>
          </motion.div>
          <div className='card-body bg-slate-800 text-zinc-100'>
            <h2 className='card-title text-zinc-100' >
              {event.name}
              <div className='badge badge-secondary'>{event.status}</div>
            </h2>
            <p>{event.gender}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
