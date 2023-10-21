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
import AddtoCartPage1 from './Components/AddToCart/AddtoCartPage1';
import ErrorPAge from './Components/ErrorPage/Errorpage';
import Login from './Components/Login&Register/Login';
import Register from './Components/Login&Register/Register';
import AuthProvider from '../Provider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

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
      path: '/mycart',
      element :  <AddtoCartPage1></AddtoCartPage1>,
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
      loader: ()=> fetch(`http://localhost:5000/product`),
    },
    
    //Add to cart page
    {
      path: "/addTocart",
      element: <AddtoCartPage1></AddtoCartPage1>,
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
      loader: ()=> fetch("http://localhost:5000/product"),
      
    },
    {
      path: '/sony',
      element :  <Sony></Sony>,
      loader: ()=> fetch("http://localhost:5000/product"),
      
    },
    {
      path: '/google',
      element :  <Google></Google>,
      loader: ()=> fetch("http://localhost:5000/product"),
      
    },
    {
      path: '/intel',
      element :  <Intel></Intel>,
      loader: ()=> fetch("http://localhost:5000/product"),
      
    },
    {
      path: '/asus',
      element :  <Asus></Asus>,
      loader: ()=> fetch("http://localhost:5000/product"),
      
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
