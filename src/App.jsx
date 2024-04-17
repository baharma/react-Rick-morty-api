import HeroUi from './component/ui/hero';
import { ApiProvider } from './api/ApiContext';
import { useEffect } from 'react';

function App() {
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  

  return (
    <>
      <ApiProvider apiUrl={apiUrl}>
        <HeroUi />
      </ApiProvider>
    </>
  );
}

export default App;
