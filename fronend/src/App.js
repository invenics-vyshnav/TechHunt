import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/register" element={<Signup />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
