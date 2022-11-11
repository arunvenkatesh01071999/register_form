import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Regist from './Components/Register.js';
import './App.css';

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Regist/>}/>
        <Route path="/Login" element={<Regist/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
