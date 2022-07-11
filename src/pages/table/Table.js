import React, { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import tableMiddle from "../../applyMiddleware/tableMiddle";
import { useNavigate } from "react-router-dom";
import deleteMiddle from "../../applyMiddleware/deleteMiddle";
import { Modal } from "bootstrap";
import { Button } from "bootstrap";
import { render } from "@testing-library/react";
import updateMiddle from "../../applyMiddleware/updateMiddle";
import moment from "moment";
import updateEmployeesMiddle from "../../applyMiddleware/updateEmployeesMiddle";

export default function Table() {
  let state = useSelector((state) => state?.getTableReducer?.get_tbl_emp);
  let updateState = useSelector((state) => state?.updateReducer?.update_data);
  // console.log("state",updateState)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateData,setUpdateData] = useState()
  //  console.log("updatestate",updateData)
  // console.log(updateState.name)

  useEffect(()=>{
    setUpdateData(updateState)
  },[updateState])


  const delBtn = (e) => {
    // console.log(e.target.value);
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    let id = e.target.value;
    dispatch(deleteMiddle(id, token));
  };
  const getEmpData = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    dispatch(tableMiddle(token));

    if (e.target.name == "getData") {
      e.target.remove("button");
    }
    setTimeout(() => {
      let token = localStorage.getItem("token");
      if (!token) {
        alert("Please Login");
        navigate("/login");
      } else {
        // alert("You Already Login");
        navigate("/table");
      }
    }, 1000);

  };

  const get_updt_data = (e) => {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    let id = e.target.value;

    // console.log(id)
    dispatch(updateMiddle(id, token));

  };


  // console.log(updateData.name)
  const update_emp__data = (e) => {
    // console.log('update');
    // console.log(e.target.value)
    let id = e.target.value;
    let token = localStorage.getItem('token');
   token = JSON.parse(token)
    dispatch(updateEmployeesMiddle(id,token,updateData))
    window.location.reload()
  }


  const changeData = (e) => {
    const {name,value} = e.target
    // console.log(name,value);
    setUpdateData({
      ...updateData,
      [name]:value
    })
    
  }

  //  console.log(updateData?.name);
  //  console.log(updateData?.email);
  //  console.log(updateData?.technologies_known);
  return (
    <React.Fragment>
      <div style={{ height: "600px !imprtant" }}>
        <Header />

        <div className="d-flex justify-content-center mt-5">
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
        <div className="d-flex justify-content-center">
          <table className=" container-fluid border border-white">
            <thead>
              <tr className=" text-white fs-4 border border-white">
                <td className="p-3">Id</td>
                <td className="p-3 border border-white">Name</td>
                <td className="p-3 border border-white">Email</td>
                <td className="p-3 border border-white">DOB</td>
                <td className="p-3 border border-white">Position</td>
                <td className="p-3 border border-white">Technologies Known</td>
                <td className="p-3 border border-white">Technologie Type</td>
                <td className="p-3 border border-white">Actions</td>
              </tr>
            </thead>
            <tbody>
              {state.map((cv, idx) => {
                // console.log(cv);
                return (
                  <tr
                    className="text-white fs-4 container border border-white"
                    key={idx}
                  >
                    <td className="ps-3 border border-white">{idx + 1}</td>
                    <td className="ps-5 border border-white">{cv.name}</td>
                    <td className="ps-5 border border-white">{cv.email}</td>
                    <td className="ps-3 border border-white">
                      {moment(cv.dob).format("DD-MM-YYYY")}
                    </td>
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
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        name="edit"
                        value={cv._id}
                        onClick={(e) => {
                          get_updt_data(e);
                        }}
                      >
                        Update
                      </button>
                    </td>
                    <td className="d-flex justify-content-center">
                      <button
                        className="border border-white btn btn-danger btn-lg mb-3"
                        onClick={(e) => {
                          delBtn(e);
                        }}
                        value={cv._id}
                        name="delete"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* {console.log(updateState)} */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-4 text-center">
              <form className="border p-5 row">
                <label className="col-5">Name</label>
                <div className="col-7">
                  <input
                    type="text"
                    name="name"
                    className="form-control fs-3 text-center "
                    value={updateData?.name ?? ''}
                    onChange={(e)=>{changeData(e)}}
                  />
                  {/* {console.log(updateData?)} */}
                </div>

                <label className="col-5">Email</label>
                <div className="col-7">
                  <input
                    type="email"
                    name="email"
                    className="form-control fs-3 text-center "
                    value={updateData?.email ?? ""}
                   onChange={(e)=>{changeData(e)}}
                  />
                </div>

                <label className="col-5">Date of Birth</label>
                <div className="col-7">
                  <input
                    type="date"
                    name="dob"
                    className="form-control fs-3 text-center "
                    value={moment(updateData?.dob).format("YYYY-MM-DD") ?? ""}
                    onChange={(e)=>{changeData(e)}}
                  />
                </div>

                <label className="col-5">Position</label>
                <div className="col-7">
                  <input
                    type="text"
                    name="position"
                    className="form-control fs-3 text-center "
                    value={updateData?.position ?? ""}
                    onChange={(e)=>{changeData(e)}}
                  />
                </div>

                <label className="col-5">Technologies Known</label>
                <div className="col-7">
                  <input
                    type="text"
                    name="technologies_known"
                    className="form-control fs-3 text-center "
                    value={updateData?.technologies_known ?? ""}
                    onChange={(e)=>{changeData(e)}}
                  />
                </div>

                <label className="col-5">Technologie Type</label>
                <div className="col-7">
                  <input
                    name="technologie_type"
                    className="form-control fs-3 text-center "
                    value={updateData?.technologie_type ?? ""}
                    onChange={(e)=>{changeData(e)}}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" value={updateState._id} onClick={(e)=>{update_emp__data(e)}}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
