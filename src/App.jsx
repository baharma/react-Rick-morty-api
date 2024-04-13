import HeroUi from './component/ui/hero';
import { ApiProvider } from './api/ApiContext';
import { useEffect } from 'react';

function App() {
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const token = import.meta.env.VITE_REACT_APP_API_KEY;

  return (
    <>
      <ApiProvider apiUrl={apiUrl} token={token}>
        <HeroUi />
      </ApiProvider>
    </>
  );
}

export default App;
