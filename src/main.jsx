import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';
import Main from './component/module/main/main.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/test',
    element: <p>test</p>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
