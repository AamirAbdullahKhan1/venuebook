import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Venues from './components/Venues';
import BookingForm from './components/BookingForm';
import Login from './components/Login'
import MyBookings from './components/MyBookings';
import HowItWorks from './components/HowItWorks';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <Navbar/>
      <Hero/>
      </>
    ),
  },
  {
    path: '/venue',
    element: (
      <>
      <Navbar/>
      <Venues/>
      </>
    ),
  },
  {
    path: '/booking',
    element: (
      <>
      <Navbar/>
      <BookingForm/>
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
      <Login/>
      </>
    ),
  },
  {
    path: '/adminlogin',
    element: (
      <>
      <AdminLogin/>
      </>
    ),
  },
  {
    path: '/mybookings',
    element: (
      <>
      <Navbar/>
      <MyBookings/>
      </>
    ),
  },
  {
    path: '/howitworks',
    element: (
      <>
      <Navbar/>
      <HowItWorks/>
      </>
    ),
  },
  {
    path: '/adminpanel',
    element: (
      <>
      <AdminPanel/>
      </>
    ),
  },
])

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
