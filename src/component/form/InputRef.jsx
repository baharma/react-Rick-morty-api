const InputRef = ({ Children, onChange, ...props }) => {
  return (
    <>
      <label className=' input-bordered flex items-center rounded-l-lg input'>
        <input
          type='text'
          className='grow rounded-l-lg'
          placeholder='Search'
          style={{ width: '700px' }}
          {...props}
          onChange={onChange}
        />
        {Children}
      </label>
    </>
  );
};

export default InputRef;
