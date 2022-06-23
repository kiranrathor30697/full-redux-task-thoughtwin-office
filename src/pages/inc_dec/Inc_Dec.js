import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrementActionCreator, incrementActionCreator } from '../../action_creator/ActionCreator';
import '../../App.css';

function Inc_Dec() {

  const state = useSelector(state=>state);
//   console.log(state.Reducer1)
  const dispatch = useDispatch();
  return (
    <div className="">
      <header className="App">
        <h1 className='text-center'>{state.Reducer1}</h1>
        <button className='btn btn-light me-4' onClick={()=>{dispatch(incrementActionCreator())}}>INCREMENT</button>
        <button className='btn btn-light ' onClick={()=>{dispatch(decrementActionCreator())}}>DECREMENT</button><br />
        <Link to='/register' className='text-white text-decoration-none ' >User Register</Link>
      </header>
    </div>
  );
}

export default Inc_Dec;
