import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerActionCreator } from '../../action_creator/ActionCreator';

export default function Register() {
  const state = useSelector(state=>state);
  const dispatch = useDispatch();
  return (
    <div>
      <form className='bg-secondary p-4 rounded'>
          <h3 className='App mb-3'>Register Form</h3>
          <input type='text' name='userName' className='d-block form-control mb-3' placeholder='Enter user Name' />
          <input type='email' name='email' className='d-block form-control mb-3' placeholder='Enter Email' />
          <input type='password' name='password' className='d-block form-control mb-3' placeholder='Enter Password' />
          <input type='password' name='confirmPassword' className='d-block form-control mb-3' placeholder='Enter Confirm password' />
          <button type='button' name='submit' className='btn btn-primary' onClick={()=>{dispatch(registerActionCreator())}}>Register Form</button>
      </form>
    </div>
  );
}
