import axios from 'axios';
import React from 'react';
import { tableActionCreator } from '../action_creator/actionCreator';

export default function tableMiddle(token) {
  return async (dispatch) => {
   
      try {
          const tbl = await axios.get('http://192.168.1.11:8000/api/employees',{
              headers:{
                Authorization:token
              }
          })
          // console.log(tbl)
          await dispatch(tableActionCreator(tbl))
      } catch (error) {
          console.log(error);
      }
  }
}
