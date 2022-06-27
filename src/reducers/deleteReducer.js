 import { DELETEEMPLOYEES } from "../Constants/constants";
let initialData = {
    delete_data:[]
}

export const deleteReducer = (state=initialData,action) => {
    // console.log(state)
    // debugger
    switch(action.type){
        case DELETEEMPLOYEES:
            return{
                ...state,
                delete_data:action.payload
            }
    }
    return state
}




















































// import React, { useState } from "react";
// import Footer from "../layout/Footer";
// import Header from "../layout/Header";
// import "../../App.css";
// import { useDispatch, useSelector } from "react-redux";
// import tableMiddle from "../../applyMiddleware/tableMiddle";
// import { useNavigate } from "react-router-dom";
// import deleteMiddle from "../../applyMiddleware/deleteMiddle";
// import updateMiddle from "../../applyMiddleware/updateMiddle";

// export default function Table() {
//   let state = useSelector((state) => state?.getTableReducer?.get_tbl_emp);
//   let updateState = useSelector(state=>state?.updateReducer?.update_data)
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const delBtn = (e) => {
//     // console.log(e.target.value);
//     let token = localStorage.getItem("token");
//     token = JSON.parse(token);
//     let id = e.target.value
//     dispatch(deleteMiddle(id,token))
//   };
//   const getEmpData = (e) => {
//     e.preventDefault();
//     let token = localStorage.getItem("token");
//     token = JSON.parse(token);
//     dispatch(tableMiddle(token));

//     if (e.target.name == "getData") {
//       e.target.remove("button");
//     }
//     setTimeout(() => {
//       let token = localStorage.getItem("token");
//       if (!token) {
//         alert("Please Login");
//         navigate("/login");
//       } else {
//         // alert("You Already Login");
//         navigate("/table");
//       }
//     }, 1000);
//   };
  
//   // const get_updt_data = (e) => {
//   //   let token = localStorage.getItem("token");
//   //   token = JSON.parse(token);
//   //   let id = e.target.value
//   //   // console.log(id)
//   //   dispatch(updateMiddle(id,token))
//   // }
  
//   // console.log(state);  
//   return (
//     <React.Fragment>
//       <div style={{ height: "600px !imprtant" }}>
//         <Header />
  
//         <div className="d-flex justify-content-center mt-5">
//           <button
//             className="btn btn-primary btn-xl mb-5"
//             name="getData"
//             onClick={(e) => {
//               getEmpData(e);
//             }}
//           >
//             Get Employees Data
//           </button>
//         </div>
//         <div className="d-flex justify-content-center">
//           <table className=" container-fluid border border-white">
//             <thead>
//               <tr className=" text-white fs-4 border border-white">
//                 <td className="p-3">Id</td>
//                 <td className="p-3 border border-white">Name</td>
//                 <td className="p-3 border border-white">Email</td>
//                 <td className="p-3 border border-white">DOB</td>
//                 <td className="p-3 border border-white">Position</td>
//                 <td className="p-3 border border-white">Technologies Known</td>
//                 <td className="p-3 border border-white">Technologie Type</td>
//                 <td className="p-3 border border-white">Actions</td>
//               </tr>
//             </thead>
//             <tbody>
//               {state.map((cv, idx) => {
//                 // console.log(cv);
//                 return (
//                   <tr
//                     className="text-white fs-4 container border border-white"
//                     key={idx}
//                   >
//                     <td className="ps-3 border border-white">{idx+1}</td>
//                     <td className="ps-5 border border-white">{cv.name}</td>
//                     <td className="ps-5 border border-white">{cv.email}</td>
//                     <td className="ps-5 border border-white">{cv.dob}</td>
//                     <td className="ps-5 border border-white">{cv.position}</td>
//                     <td className="ps-5 border border-white">
//                       {cv.technologies_known}
//                     </td>
//                     <td className="ps-5 border border-white">
//                       {cv.technologie_type}
//                     </td>
//                     <td className="d-flex justify-content-center m-3">
//                       <button
//                         className="border border-white btn btn-info btn-lg"
//                         data-bs-toggle="modal" data-bs-target="#exampleModal"
//                         // onClick={(e)=>{get_updt_data(e)}}
//                         name="edit"
//                         value={cv._id}
//                       >
//                         Update
//                       </button>
//                     </td>
//                     <td className="d-flex justify-content-center">
//                       <button
//                         className="border border-white btn btn-danger btn-lg mb-3"
//                         onClick={(e) => {
//                           delBtn(e);
//                         }}
//                         value={cv._id}
//                         name="delete"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>

//             {/* {console.log(updateState)} */}

//       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog modal-lg">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body fs-4 text-center">
//               <div>k</div><hr />
//               <div>y</div><hr />
//               <div>k</div><hr />
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" className="btn btn-primary">Save changes</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </React.Fragment>
//   );
// }
