import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Inc_Dec from './pages/inc_dec/Inc_Dec';
import { Login } from './pages/login/Login';
import Logout from './pages/logout/Logout';
import Register from './pages/register/Register';
import Protected from './protected_route/Protected';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Protected Component={Home} />} />
          <Route path='/register' element={<Protected Component={Register} />} />
          <Route path='/login' element={<Protected Component={Login} />} />
          <Route path='/inc_dec' element={<Protected Component={Inc_Dec} />} />
          <Route path='/logout' element={<Protected Component={Logout} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
