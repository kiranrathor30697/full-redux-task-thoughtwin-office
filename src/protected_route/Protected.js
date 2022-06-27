import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';

export default function Protected(props) {
    const {Component} = props;
    let navigate = useNavigate();
      

    useEffect(() => {
         const token = localStorage.getItem('token')
        // console.log(token)

        setTimeout(() => {
          if(!token){ 
            // alert('This is public Route, Please Login')  ;

            toast.success('This is public Route, Please Login');
          }
        }, 1000);
    }, []);

    setTimeout(() => {
      navigate('/login') 
    }, 5000);

  return (
    <>
      <Component />
      <ToastContainer  />
    </>
  );
}
