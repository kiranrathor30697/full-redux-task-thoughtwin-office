import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

export default function Home() {
  return (
    <>
      <Header />
      <h1 className='text-white App-header'>This is my Home Page</h1>
      <Footer />
      <Outlet />
    </>
  );
}
