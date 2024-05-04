import { Children, forwardRef } from 'react';

const input = ({ Children, ...props }) => {
  return (
    <>
      <label className=' input-bordered flex items-center rounded-l-lg input'>
        <input
          type='text'
          className='grow rounded-l-lg'
          placeholder='Search'
          style={{ width: '700px' }}
          {...props}
        />
        {Children}
      </label>
    </>
  );
};

export default input;
