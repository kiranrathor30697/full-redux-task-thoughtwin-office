import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrementActionCreator, incrementActionCreator } from '../../action_creator/actionCreator';
import '../../App.css';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

function Inc_Dec() {

  const state = useSelector(state=>state);
  // console.log(state)
  const dispatch = useDispatch();
  return (
    <div className="">
      <Header />
      <div className='App-header'>
        <h1 className='App text-white'>{state.reducer1}</h1>
        <div>
        <button className='btn btn-light me-4 mt-5' onClick={()=>{dispatch(incrementActionCreator())}}>INCREMENT</button>
        <button className='btn btn-light mt-5' onClick={()=>{dispatch(decrementActionCreator())}}>DECREMENT</button><br />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Inc_Dec;
