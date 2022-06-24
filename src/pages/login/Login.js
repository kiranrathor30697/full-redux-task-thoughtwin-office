import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginMiddle } from '../../applyMiddleware/loginMiddle';
import "../../App.css"
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export const Login = () => {

    const [login_Data,setLogin_Data] = useState({
          userName:'',
          password:""
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
            // console.log(e)
            const {name,value} = e.target;
            setLogin_Data({
                ...login_Data,
                [name]:value
        })
        //  console.log(state)
    }
    const  loginForm = (e) => {
          // console.log(e);
          e.preventDefault();
          dispatch(loginMiddle(login_Data))
      }

    return (
      <>
        <Header />
        <div className='App-header '>
          <form className="bg-secondary p-4 rounded">
            <h3 className="App mb-3">Login Form</h3>
            <input
              type="text"
              name="userName"
              className="d-block form-control mb-3"
              onChange={(e) => {handleChange(e)}}
              placeholder="Enter user Name"
            />
        
            <input
              type="password"
              name="password"
              className="d-block form-control mb-3"
              onChange={(e)=>{handleChange(e)}}
              placeholder="Enter Password"
            />
            
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {loginForm(e)}}
            >
              Register Form
            </button>
          </form>
        </div>
        <Footer />
      </>
    );
  }

