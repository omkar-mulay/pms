import React from 'react';
import { Route, Routes} from 'react-router-dom';
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
import LandinPage from './component/LandingPage';
import ShowTasks from './component/ShowTasks';
import UpdateTask from './component/UpdateTask';
import UpdateStatus from './component/UpdateStatus';
import ShowProgress from './component/ShowProgres';
import Home from './component/Home';
import { Container, Nav, Navbar, Overlay } from "react-bootstrap";


function App() {
    return (
    <div className='App'>
      <div className="overlay">
            <div className="content">
                <div className="content">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="/" style={{textAlign : "center"}}><span style={{ margin: '10px' }}></span>Project Management System</Navbar.Brand>
                            </Container>
                    </Navbar>
                </div>
            </div>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/ShowTasks" element={<ShowTasks />} />
          <Route path="/UpdateTask" element={<UpdateTask />} />
          <Route path="/UpdateStatus" element={<UpdateStatus />} />
          <Route path="/ShowProgress" element={<ShowProgress />} />
          
      </Routes>
    </div>
    )}

export default App;