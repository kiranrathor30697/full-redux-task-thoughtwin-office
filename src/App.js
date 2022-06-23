import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inc_Dec from './pages/inc_dec/Inc_Dec';
import Register from './pages/register/Register';

function App() {

  return (
    <div className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/register' element={<Register />} />
          <Route path='/inc_dec' element={<Inc_Dec />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
