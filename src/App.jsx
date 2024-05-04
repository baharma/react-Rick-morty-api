import { ApiProvider } from './api/ApiContext';
import Navbar from './component/ui/navbar';
import Footer from './component/ui/footer';
import './sass/main.css';

function App({ children, ...props }) {
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  return (
    <>
      <ApiProvider apiUrl={apiUrl}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </ApiProvider>
    </>
  );
}

export default App;
