import { Toast } from 'bootstrap';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
    const {Component} = props;
    let navigate = useNavigate();

    useEffect(() => {
         const token = localStorage.getItem('token')
        // console.log(token)
        if(!token){
            navigate('/login')
            alert('This is public Route, Please Login')  ;
            <Toast>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        }
    }, []);

  return (
    <Component />
  );
}
