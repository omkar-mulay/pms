import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Admin from './component/Admin';
import Client from './component/Client';
import Manager from './component/Manager';
import Employee from './component/Employee';
import Registration from './component/Registration';
import CreateProject from './component/CreateProject';
//import MainMenu from './components/MainMenu';

function App() {
    return (
    <div className='App'>
      <h1>Welcome</h1> <br/>
      <Link to="/login">Login</Link> <br/>
      
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/Manager" element={<Manager />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/CreateProject" element={<CreateProject />} />
      </Routes>
    </div>
    )}

export default App;