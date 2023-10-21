import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import AddProductPage from './Components/AddProductPage/AddProductPage';
import Home from './Components/Home/Home';
import Apple from './Components/Brand/Apple';
import Samsung from './Components/Brand/Samsung';
import Sony from './Components/Brand/Sony';
import Google from './Components/Brand/Google';
import Intel from './Components/Brand/Intel';
import Asus from './Components/Brand/Asus';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children :[{
      path: '/addProduct',
      element : <AddProductPage></AddProductPage>,
      
    },
    {
      path: '/home',
      element :  <Home></Home>,
      
    },
    {
      path: '/',
      element : <Home></Home>,
    },
    // brand
    {
      path: '/apple',
      element :  <Apple></Apple>,
      loader: ()=> fetch("http://localhost:5000/product"),
      
    },
    {
      path: '/samsung',
      element :  <Samsung></Samsung>,
      
    },
    {
      path: '/sony',
      element :  <Sony></Sony>,
      
    },
    {
      path: '/google',
      element :  <Google></Google>,
      
    },
    {
      path: '/intel',
      element :  <Intel></Intel>,
      
    },
    {
      path: '/asus',
      element :  <Asus></Asus>,
      
    },
    
  
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
