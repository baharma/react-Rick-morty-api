export default function navBar() {
  return (
    <>
      <div className=' bg-base-100  '>
        <div className='px-7 navbar bg-gray-900'>
          <div className='flex-1'>
            <a className='btn btn-ghost text-xl'>Rick And Morty</a>
          </div>
          <div className='flex-none'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Character</a>
              </li>
              <li>
                <a>Location</a>
              </li>
              <li>
                <a>Episode</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
