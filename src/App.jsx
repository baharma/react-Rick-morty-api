import HeroUi from './component/ui/hero';
import { ApiProvider } from './api/ApiContext';
function App() {

  const apiUrl = 'https://newsapi.org/v2';
  const token = '71e9af30d4d842fdb0889c821eef0913'
  return (
    <>
    <ApiProvider apiUrl={apiUrl} token={token}>
        <HeroUi />
    </ApiProvider>
    </>
  );
}

export default App;
