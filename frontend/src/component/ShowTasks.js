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
import { Button } from "react-bootstrap";

function ShowTasks() {
    const [tasks, setTasks] = useState([])

    let navigate = useNavigate();
    // const[managerid, setManagerId] = useState("");
    // const[projectname, setProjectname] = useState("");
    // const[project_desc, setProjectdesc] = useState("");
    // const[startdate, setStartdate] = useState("");
    // const[enddate, setEnddate] = useState("");
    // const[clientid, setClientid] = useState("");

    const search = useLocation().search;

    const projectid = new URLSearchParams(search).get('projectid');

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

    function delTask(taskid, taskname){
        console.log(taskid);
        if(window.confirm("Are you sure you want to delete task: "+taskname))
        {
            fetch("http://localhost:8080/delete_task?taskid="+taskid)
            .then(response => {
                if(response.status===200){
                    alert("Task deleted successfully!");
                    navigate("/Manager");
                }
            })
        }
        
    }  

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
                        <MDBNavbarLink aria-current='page' href='/Manager'>
                        Home
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='/ChangePassword'>Change Password</MDBNavbarLink>
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
        <div className="container" style={{alignContent:"left"}}>
            <Link style={{alignContent:"left"}} className="btn btn-info" to={`/InsertTask`} >Create new task</Link>
        </div>
        <br/>
        <Link className="btn btn-info" to={`/ShowProgress?projectid=${projectid}`} >View Pie Diagram</Link>
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
                                   <td>{task.start_date}</td> 
                                   <td>{task.end_date}</td> 
                                   <td>{task.projectid}</td>
                                   <td>{task.status}</td>
                                   <td>{task.description}</td>
                                   <td>{task.priority}</td>
                                   <td>{task.teammember_id}</td>
                                   <td><Link className="btn btn-info" to={`/UpdateTask?taskid=${task.taskid}`} >Update</Link></td>
                                   <td><Button className="btn btn-danger" onClick={()=> delTask(task.taskid, task.task_name)}>Delete</Button></td>
                                   
                                </tr>
                                ) 
                            })
                    }
            </tbody>
        </table>
        
        </div>
        
    );
    
}
export default ShowTasks;