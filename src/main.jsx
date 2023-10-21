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
import Details from './Components/DetailsPage/Details';
import ErrorPAge from './Components/ErrorPage/Errorpage';
import Login from './Components/Login&Register/Login';
import Register from './Components/Login&Register/Register';
import AuthProvider from '../Provider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UpdateProduct from './Components/UpadateProduct/UpdateProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPAge></ErrorPAge>,
    children :[{
      path: '/addProduct',
      element : <PrivateRoute><AddProductPage></AddProductPage> </PrivateRoute> ,
      
    },
    {
      path: '/home',
      element :  <Home></Home>,
      
    },
    {
      path: '/',
      element : <Home></Home>,
    },

    // login and register
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/signup",
      element: <Register></Register>,
    },

    // details page
    {
      path: "/details/:id",
      element: <PrivateRoute><Details></Details></PrivateRoute> ,
      loader: ()=> fetch(`https://brand-store-server-oqpfd1tqh-tanvirs-projects-23a7939e.vercel.app/`),
    },
    
    
    // brand
    {
      path: '/apple',
      element :  <Apple></Apple>,
      loader: ()=> fetch("https://brand-store-server-oqpfd1tqh-tanvirs-projects-23a7939e.vercel.app/"),
      
    },
    {
      path: '/samsung',
      element :  <Samsung></Samsung>,
      loader: ()=> fetch("https://brand-store-server-oqpfd1tqh-tanvirs-projects-23a7939e.vercel.app/"),
      
    },
    {
      path: '/sony',
      element :  <Sony></Sony>,
      loader: ()=> fetch("https://brand-store-server-oqpfd1tqh-tanvirs-projects-23a7939e.vercel.app/"),
      
    },
    {
      path: '/google',
      element :  <Google></Google>,
      loader: ()=> fetch("https://brand-store-server-oqpfd1tqh-tanvirs-projects-23a7939e.vercel.app/"),
      
    },
    {
      path: '/intel',
      element :  <Intel></Intel>,
      loader: ()=> fetch("https://brand-store-server-oqpfd1tqh-tanvirs-projects-23a7939e.vercel.app/"),
      
    },
    {
      path: '/asus',
      element :  <Asus></Asus>,
      loader: ()=> fetch("https://brand-store-server-oqpfd1tqh-tanvirs-projects-23a7939e.vercel.app/"),
      
    },
    {
      path: '/updateproduct/:id',
      element :  <UpdateProduct></UpdateProduct>,
      loader: ({params})=> fetch(`https://brand-store-server-oqpfd1tqh-tanvirs-projects-23a7939e.vercel.app//${params.id}`),
      
    },
    
  
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
