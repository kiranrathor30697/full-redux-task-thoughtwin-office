import React, { useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import tableMiddle from "../../applyMiddleware/tableMiddle";
import { useNavigate } from "react-router-dom";

export default function Table() {
  let state = useSelector((state) => state?.getTableReducer?.get_tbl_emp);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const delBtn = (e) => {
      console.log(e)
  }
  const getEmpData = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    dispatch(tableMiddle(token));

    if (e.target.name == "getData") {
      e.target.remove("button");
    }
    setTimeout(()=>{
        let token =  localStorage.getItem('token');
         if(!token){
           alert('Please Login');
           navigate("/login")
         }else{
           alert('You Already Login');
           navigate('/table')
         }
       },1000)
  };
  console.log(state);
  return (
    <React.Fragment >
      <div style={{height:'600px !imprtant'}}>
      <Header />
        <div className="d-flex justify-content-center mt-5" >
        <button
            className="btn btn-primary btn-xl mb-5"
            name="getData"
            onClick={(e) => {
            getEmpData(e);
            }}
        >
            Get Employees Data
        </button>
        </div>
        <div className="d-flex justify-content-center" >
        {state.map((cv, idx) => {
            // console.log(cv);
            return (
            <table className=" container-fluid border border-white"  key={idx}>
                <thead>
                <tr className=" text-white fs-4 border border-white" >
                    <td className="p-3">
                    Id
                    </td>
                    <td className="p-3 border border-white">Name</td>
                    <td className="p-3 border border-white">Email</td>
                    <td className="p-3 border border-white">DOB</td>
                    <td className="p-3 border border-white">Position</td>
                    <td className="p-3 border border-white">
                    Technologies Known
                    </td>
                    <td className="p-3 border border-white">Technologie Type</td>
                    <td className="p-3 border border-white">Actions</td>
                </tr>
                </thead>
                <tbody>
                <tr
                    className="text-white fs-4 container border border-white"
                >
                    <td className="ps-5 border border-white">{idx + 1}</td>
                    <td className="ps-5 border border-white">{cv.name}</td>
                    <td className="ps-5 border border-white">{cv.email}</td>
                    <td className="ps-5 border border-white">{cv.dob}</td>
                    <td className="ps-5 border border-white">{cv.position}</td>
                    <td className="ps-5 border border-white">
                    {cv.technologies_known}
                    </td>
                    <td className="ps-5 border border-white">
                    {cv.technologie_type}
                    </td>
                    <td className="d-flex justify-content-center m-3">
                    <button
                        className="border border-white btn btn-info btn-lg"
                        name="edit"
                    >
                        Update
                    </button>
                    </td>
                    <td className="d-flex justify-content-center">
                    <button
                        className="border border-white btn btn-danger btn-lg mb-3"
                        onClick={(e)=>{delBtn(e)}}
                        name="delete"
                    >
                        Delete
                    </button>
                    </td>
                </tr>
                </tbody>
            </table>
            );
        })}
        </div>    
      </div>
      <Footer />
    </React.Fragment>
  );
}
