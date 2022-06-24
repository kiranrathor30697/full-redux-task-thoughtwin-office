import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
    const {Component} = props;
    let navigate = useNavigate();

    useEffect(() => {
         const token = localStorage.getItem('token')
        // console.log(token)
        if(!token){
            navigate('/login')
            alert('Please Login')  
        }else{
            navigate('/table')
        }
        
    }, []);

  return (
    <Component />
  );
}
