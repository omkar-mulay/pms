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


function Employee() {

    const [tasks, setTasks] = useState([])
    
    let navigate = useNavigate();
    // const[viewtaskbyproject, setviewtaskbyproject] = useState("");
    
    // const[managerid, setManagerId] = useState("");
    // const[projectname, setProjectname] = useState("");
    // const[project_desc, setProjectdesc] = useState("");
    // const[startdate, setStartdate] = useState("");
    // const[enddate, setEnddate] = useState("");
    // const[clientid, setClientid] = useState("");

    // const search = useLocation().search;
    // const managerid = new URLSearchParams(search).get('managerid');
    const save = JSON.parse(localStorage.getItem("loggedinuser"));
    console.log(save[1]);
    const fetchData = () => {
        fetch("http://localhost:8080/show_task_by_empid?empid="+save[1])
          .then(response => {
            return response.json()
          })
          .then(data => {
            setTasks(data)
            console.log(data)
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
                        <MDBNavbarLink aria-current='page' href='/Employee'>
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
        <h4 style={{textAlign: 'left'}}>All Tasks</h4>
        <br/>
        <table className="table table-bordered table-hover" style={{border: 'solid'}}>
            <thead>
                <tr>
                <th>Task id</th>
                <th>Task name</th>
                <th>Task Description</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Project id</th>
                <th>Status</th>

                </tr>
            </thead>
            <tbody>
                    {
                        tasks.map((tasks)=>{
                            return(
                                
                                <tr key={tasks.taskid}> 
                                   <td>{tasks.taskid}</td>
                                   <td>{tasks.task_name}</td> 
                                   <td>{tasks.description}</td>
                                   <td>{tasks.start_date}</td> 
                                   <td>{tasks.end_date}</td>
                                   <td>{tasks.projectid}</td>
                                   <td>{tasks.status}</td>
                                   <td><Link className="btn btn-info" to={`/UpdateStatus?taskid=${tasks.taskid}`} >Update Status</Link></td>
                                </tr>


                                ) 
                            })
                    }
            </tbody>
        </table>
        
        </div>
        


    );
    
}
export default Employee;