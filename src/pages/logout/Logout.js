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
           let token = localStorage.getItem('token')
            if(token){
              alert('Logut Successfully');
              navigate("/login")
            }
           token =  localStorage.removeItem('token');
          },1000)
        }
      
      <Footer />
    </>
  );
}
