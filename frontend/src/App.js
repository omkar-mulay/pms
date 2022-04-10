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
import InsertTask from './component/InsertTask';
import UpdateAccount from './component/UpdateAccount';
import UpdateProject from './component/UpdateProject';
import ChangePassword from './component/ChangePassword';
import Logout from './component/Logout';
import ProjectDetails from './component/ProjectDetails';
//import MainMenu from './components/MainMenu';

function App() {
    return (
    <div className='App'>
      <h1>Project Management System</h1> <br/>
      <Link to="/login">Login</Link> <br/>
      
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/Manager" element={<Manager />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/CreateProject" element={<CreateProject />} />
          <Route path="/InsertTask" element={<InsertTask />} />
          <Route path="/UpdateAccount" element={<UpdateAccount />} />
          <Route path="/UpdateProject" element={<UpdateProject />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/ProjectDetails" element={<ProjectDetails />} />
          
      </Routes>
    </div>
    )}

export default App;