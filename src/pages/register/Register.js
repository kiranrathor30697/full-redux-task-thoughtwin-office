import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import registerMiddle from "../../applyMiddleware/registerMiddle";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [regi_data, setRegi_data] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // export const regi_data;
  const handleChange = (e) => {
    // console.log(e)
    const { name, value } = e.target;
    setRegi_data({
      ...regi_data,
      [name]: value,
    });
    // console.log(regi_data)
  };

  const registerData = (e) => {
    e.preventDefault();
    dispatch(registerMiddle(regi_data));
  };

  return (
    <>
      <Header />
      <div className="App-header">
        <form className="bg-secondary p-4 rounded">
          <h3 className="App mb-3">Register Form</h3>
          <input
            type="text"
            name="userName"
            className="d-block form-control mb-3"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Enter user Name"
          />
          <input
            type="email"
            name="email"
            className="d-block form-control mb-3"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Enter Email"
          />
          <input
            type="password"
            name="password"
            className="d-block form-control mb-3"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Enter Password"
          />
          <input
            type="password"
            name="confirmPassword"
            className="d-block form-control mb-3"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Enter Confirm password"
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              registerData(e);
            }}
          >
            Register Form
          </button>
        </form>
      </div>
      <Footer />
    </>
    
  );
}
