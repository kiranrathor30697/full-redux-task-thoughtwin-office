import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

export default function Logout() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
     
        {
          setTimeout(()=>{
            localStorage.removeItem('token');
            alert('Logut Successfully');
            navigate('/')
          },2000)
        }
      
      <Footer />
    </>
  );
}
