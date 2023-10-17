import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import AddProductPage from './Components/AddProductPage/AddProductPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children :[{
      path: '/addProduct',
      element : <AddProductPage></AddProductPage>
    }]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
