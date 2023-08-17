import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Jobs from './pages/Jobs';
import Resource from './pages/Resource';


function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
       <Route path="/home" element={<Home />}></Route> 
     <Route path="/register" element={<Signup />}></Route>
     <Route exact path="/login" element={<Login />}></Route>
       <Route exact path="/jobs" element={<Jobs />}></Route>   
       <Route path="/resource" element={<Resource />} /> 
       <Route path="/resource" element={<Resource />} /> 
   
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
