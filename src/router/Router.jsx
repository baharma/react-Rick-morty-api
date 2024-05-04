import { createBrowserRouter } from 'react-router-dom';
import Main from '../component/module/main/main.jsx';
import DetailCharakter from '../component/module/charakter/detailCarakter.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/Detail-charakter/:id',
    element: <DetailCharakter />,
  },
]);

export default router;
