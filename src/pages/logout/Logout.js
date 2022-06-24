import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

export default function Logout() {
  return (
    <>
      <Header />
      <h1 className='App-header'>
        {
          setTimeout(()=>{
          localStorage.removeItem('token');
          alert('Logut Successfully');
          },2000)
        }
      </h1>
      <Footer />
    </>
  );
}
