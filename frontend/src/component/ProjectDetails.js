import { Link, useLocation } from "react-router-dom";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UpdateProject from "./UpdateProject";
import moment from 'moment-timezone';

function ProjectDetails() {
    const [tasks, setTasks] = useState([])

    let navigate = useNavigate();

    const search = useLocation().search;

    const projectid = new URLSearchParams(search).get('projectid');

    const formatDate = (date) => {
        return moment(date).utc().tz('Asia/Kolkata').format('DD-MM-YYYY')
    }
    const fetchData = () => {
        fetch("http://localhost:8080/view_task_by_project?projectid="+projectid)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setTasks(data)
            console.log(data.start_date)
          })
    }
    useEffect(() => {
        fetchData()
      }, [])

    return(
        
        <div className="container">
            
        <header>
            <MDBNavbar expand='lg' light bgColor='white' fixed>
                <MDBContainer fluid>
                <MDBNavbarToggler
                    aria-controls='navbarExample01'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <MDBIcon fas icon='bars' />
                </MDBNavbarToggler>
                <div className='collapse navbar-collapse' id='navbarExample01'>
                    <MDBNavbarNav right className='mb-2 mb-lg-0'>
                    <MDBNavbarItem active>
                        <MDBNavbarLink aria-current='page' href='/Admin'>
                        Home
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='/Registration'>Add User</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='#'>Change Password</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='/CreateProject'>Create Project</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <select name="setting" id="setting" className="form-control" onClick={(ev)=>navigate(ev.target.value)}>    
                        <option value="">Settings </option>
                        <option value="../UpdateAccount">Update Account Info </option>
                        <option value="../Logout">Logout</option>
                        </select>
                    </MDBNavbarItem>
                    </MDBNavbarNav>
                </div>
                </MDBContainer>
            </MDBNavbar>
        </header>
        <br/>
        {/* <Link className="btn btn-info" to={`/ShowProgress?projectid=${projectid}`} >View P</Link> */}
        <h4 style={{textAlign: 'left'}}>Projects Details</h4>
        <br/>
        <table className="table table-bordered table-hover" style={{border: 'solid'}}>
            <thead>
                <tr>
                <th>Task id</th>
                <th>Task name</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Project id</th>
                <th>Status</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Team Member id</th>
                </tr>
            </thead>
            <tbody>
                    {
                        tasks.map((task)=>{
                            return(
                                <tr key={task.taskid}> 
                                   <td>{task.taskid}</td>
                                   <td>{task.task_name}</td> 
                                   <td>{formatDate(new Date(tasks.start_date))}</td> 
                                   <td>{formatDate(new Date(tasks.end_date))}</td>
                                   <td>{task.projectid}</td>
                                   <td>{task.status}</td>
                                   <td>{task.description}</td>
                                   <td>{task.priority}</td>
                                   <td>{task.teammember_id}</td>
                                   
                                </tr>
                                ) 
                            })
                    }
            </tbody>
        </table>
        
        </div>
        
    );
    
}
export default ProjectDetails;